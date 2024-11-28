const express = require('express');
const connection = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { auth, admin } = require('../middewer/auth');
require('dotenv').config();








const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// verify the page
router.post("/validate", async (req, res) => {
    const token = req.body.token;
    if (!token) {
        return res.status(400).send("Token is required");
    }

    try {
        const decoded = jwt.verify(token, process.env.ADMIN_PASSWORD);
        return res.json({ valid: true });
    } catch (err) {
        res.status(401).send("Invalid token");
    }
});


router.post('/login', (req, res) => {
    const sql = 'SELECT * FROM admins WHERE admin_email = ? AND admin_password = ?';

    connection.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.log("Database query error:", err);
            return res.json({ loginStates: false, Error: 'Query error' });
        }
        if (result.length > 0) {
            const adminId = result[0].admin_id; // Extract admin_id from query result

            const token = jwt.sign(
                { admin: true, email: req.body.email, admin_id: adminId }, // Include admin_id in payload
                process.env.ADMIN_PASSWORD,
                { expiresIn: '30d' }
            );

            res.status(200).json({ token: token, loginStates: true });
        } else {
            console.log("Login failed: Wrong Email or Password");
            return res.json({ loginStates: false, Error: 'Wrong Email or Password' });
        }
    });
});



// image uplode

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Image')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

router.post('/add-admin', [auth, admin], upload.single('image'), (req, res) => {

    const sql = `INSERT INTO admins (name,admin_email,admin_password,image)  VALUES(?)`
    const value = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.file.filename
    ]

    connection.query(sql, [value], (err, result) => {
        if (err) { return res.status(400).json({ Status: false, Error: err }) }

        else {
            return res.status(200).json({ Status: true, Result: result })
        }


    })
})



router.get('/get-admin', (req, res) => {
    const token = req.header("token");
    if (!token) {
        return res.status(400).send("Access Denied, No token Provided!");
    }; // Extract token from Authorization header

    try {
        // Verify token
        const decoded = jwt.verify(token, 'secretKey');
        const adminId = decoded.admin_id; // Extract admin_id from token payload

        // SQL to fetch admin information by admin_id
        const sql = 'SELECT * FROM admins WHERE admin_id = ?';
        connection.query(sql, [adminId], (err, result) => {
            if (err) {
                console.log("Database query error:", err);
                return res.status(400).json({ Status: false, Error: 'Query error' });
            }

            if (result.length > 0) {
                // Return the admin's information
                console.log(result[0])
                return res.status(200).json({ Status: true, Admin: result[0] });
            } else {
                return res.status(404).json({ Status: false, Error: 'Admin not found' });
            }
        });
    } catch (err) {
        console.log("Token verification error:", err);
        return res.status(401).json({ Status: false, Error: 'Invalid token' });
    }
});



router.post('/addcustomer', [auth, admin], (req, res) => {

    const sql = `INSERT INTO customers (customer_email,customer_first_name,customer_last_name,customer_phone) VALUES(?)`
    const value = [
        req.body.email,
        req.body.first,
        req.body.last,
        req.body.phone
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err })
        }
        else {
            return res.json({ Status: true, Result: result })
        }
    })
})


router.post('/addemployee', [auth, admin], (req, res) => {


    const sql = `INSERT INTO employees (employee_email,employee_first_name,employee_last_name,employee_phone,added_date,employee_password,employee_role) VALUES(?)`

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ status: false, Error: 'Hashing Error' });
        const value = [
            req.body.email,
            req.body.first,
            req.body.last,
            req.body.phone,
            req.body.data,
            hash,
            req.body.category,
        ]
        connection.query(sql, [value], (err, result) => {
            if (err) {
                console.log(err)
                return res.json({ Status: false, Error: err })
            }

            else {
                return res.json({ Status: true })
            }

        })
    })
})

router.get('/get-customer', (req, res) => {
    const sql = 'SELECT * FROM customers'
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err })
        }
        else {
            return res.json({ Status: true, Result: result })
        }
    })
})

router.get('/get-employee', (req, res) => {
    const sql = 'SELECT * FROM employees'
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err })
        }
        else {
            return res.json({ Status: true, Result: result })
        }
    })
})

router.get('/edit-employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM employees WHERE employee_id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
            return res.json({ Status: false, Error: err });
        } else {
            console.log(result[0])
            return res.json({ Status: true, Result: result });
        }

    });
});


router.delete('/delete-employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM employees WHERE employee_id = ?`;

    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ Status: false, error: 'Query Error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ Status: false, message: 'Employee not found' });
        }
        return res.status(200).json({ Status: true, message: 'Employee deleted successfully' });
    });
});

router.put('/update_employee/:id', [auth, admin], (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employees SET employee_email = ?, employee_first_name = ?, employee_last_name = ?, employee_phone = ?, employee_role = ? WHERE employee_id =?`
    const values = [
        req.body.email,
        req.body.first,
        req.body.last,
        req.body.phone,
        req.body.category
    ]
    connection.query(sql, [...values, id], (err, result) => {
        if (err) { return res.json({ Status: false, Error: err }); }
        return res.json({ Status: true });

    })

})

router.delete('/delete_employee/:id', [auth, admin], (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM employees WHERE id = ?`
    connection.query(sql, [id], (err, result) => {
        if (err) return res.json({ status: false, Error: 'Query Error' })
        return res.json({ status: true, Result: result })
    })
})

router.get('/edit-customer/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM customers WHERE customer_id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Database query error:", err);
            return res.json({ Status: false, Error: "Database query error" });
        }

        if (result.length === 0) {
            return res.json({ Status: false, Error: "Customer not found" });
        }

        console.log("Customer data:", result[0]);
        return res.json({ Status: true, Result: result });
    });
});


router.put('/update_customer/:id', [auth, admin], (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE customers SET customer_email = ?, customer_first_name = ?, customer_last_name = ?, customer_phone = ? WHERE customer_id = ?`
    const values = [
        req.body.email,
        req.body.first,
        req.body.last,
        req.body.phone
    ]
    connection.query(sql, [...values, id], (err, result) => {
        if (err) { return res.json({ Status: false, Error: err }); }
        return res.json({ Status: true });

    })

})


router.post('/add_vehicle', [auth, admin], upload.single('image'), (req, res) => {

    const sql = `
        INSERT INTO customer_vehicle_info 
        (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color,vehicle_image) 
        VALUES (?)`;

    const values = [
        req.body.customer_id,
        req.body.vehicle_year,
        req.body.vehicle_make,
        req.body.vehicle_model,
        req.body.vehicle_type,
        req.body.vehicle_mileage,
        req.body.vehicle_tag,
        req.body.vehicle_serial,
        req.body.vehicle_color,
        req.file.filename
    ];

    connection.query(sql, [values], (err, result) => {
        if (err) {
            console.error("Error inserting vehicle:", err);
            return res.json({ Status: false, Error: "Failed to add vehicle", Details: err });
        } else {
            return res.json({ Status: true, Result: "Vehicle successfully added", Data: result });
        }
    });
});

router.get('/vehicle-info', (req, res) => {
    const sql = 'SELECT * FROM customer_vehicle_info'
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err })
        }
        else {
            return res.json({ Status: true, Result: result })
        }
    })
})

router.get('/customer-info', (req, res) => {
    const customerId = req.query.id; // Get customer ID from query parameters
    const sql = 'SELECT * FROM customers WHERE customer_id = ?';

    connection.query(sql, [customerId], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ Status: false, Error: err });
        } else {
            return res.json({ Status: true, Result: result }); // Return the first result
        }
    });
});


router.get('/detail-order/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM customer_vehicle_info WHERE vehicle_id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error fetching vehicle info:', err);
            return res.status(500).json({ Status: false, Error: 'Database error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ Status: false, Error: 'Vehicle not found' });
        }

        return res.json({ Status: true, Result: result[0] });
    });
});

router.get('/get-customer-info', (req, res) => {
    const customerId = req.query.id; // Get customer ID from query parameters

    const sql = 'SELECT * FROM customers WHERE customer_id = ?';

    connection.query(sql, [customerId], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.json({ Status: false, Error: err });
        }
        if (result.length > 0) {
            return res.json({ Status: true, Result: result[0] });
        } else {
            return res.json({ Status: false, Error: "Customer not found" });
        }
    });
});

router.post('/add-service', [auth, admin], (req, res) => {
    const sql = `INSERT INTO common_services (service_name, customer_id, service_description) VALUES (?)`;
    const values = [
        req.body.service, // Corrected the order
        req.body.customer_id, // Make sure this aligns with your database schema
        req.body.description,
    ];

    connection.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err); // Log detailed error
            return res.json({ Status: false, Error: err });
        }
        return res.json({ Status: true, Result: result });
    });
});


router.get('/get-servic', (req, res) => {
    const customerId = req.query.id; // Assume `id` is `customer_id`
    console.log('customer_id', customerId)
    const sql = 'SELECT * FROM common_services WHERE customer_id = ?';
    connection.query(sql, [customerId], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err });
        }
        return res.json({ Status: true, Result: result }); // Return all matching services
    });
});




router.delete('/delete-service/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM common_services WHERE service_id = ?`
    connection.query(sql, [id], (err, result) => {
        if (err) { return res.json({ status: false, Error: 'Query Error' }) }
        return res.json({ status: true, Result: result })
    })
})


router.get('/get-vehicle-status', (req, res) => {
    const sql = 'SELECT * FROM customer_vehicle_info'

    connection.query(sql, (err, result) => {

        if (err) { return res.json({ Status: false, Error: err }) }

        return res.json({ Status: true, Result: result })
    })
})


router.get('/get-customer-status', (req, res) => {
    const customerId = req.query.id;

    const sql = 'SELECT * FROM customers';

    connection.query(sql, [customerId], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err });
        }

        return res.json({ Status: true, Result: result });
    });
});


router.post('/send-email', [auth, admin], async (req, res) => {
    const { email } = req.body;
    const { name } = req.body

    if (!email) {
        return res.json({ Status: false, Message: 'Email is required' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'fuad47722@gmail.com',
            pass: 'swgiqpgopfdqbofy', // App-specific password
        },
    });

    // const logoPath = path.join(__dirname, '../../AbeGarageCustomTemplate/assets/images/custom/logo.png');

    const mailOptions = {
        from: 'ABE Garage <fuad47722@gmail.com>',
        to: email,
        subject: 'Your Vehicle is Ready! | Abe Garage',
        text: `Hello <customerName>,

We are excited to inform you that your vehicle, ${name}, has been serviced and is ready for pickup! 🚗

At Abe Garage, we take pride in delivering top-notch vehicle maintenance and repair services. Your car has undergone thorough care, and we are confident it’s in the best condition for your journeys ahead.

Thank you for choosing Abe Garage. Our mission is to ensure your safety and satisfaction on the road. If you have any questions, feel free to contact us.

Warm regards,  
Abe Garage Team`,

        html: `
            <h1>Hello ${name},</h1>
            <p>We are excited to inform you that your vehicle, <strong> <vehicleModel></strong>, has been serviced and is ready for pickup! 🚗</p>
            <p>At <strong>Abe Garage</strong>, we take pride in delivering top-notch vehicle maintenance and repair services. Your car has undergone thorough care, and we are confident it’s in the best condition for your journeys ahead.</p>
            <p>Thank you for choosing Abe Garage. Our mission is to ensure your safety and satisfaction on the road. If you have any questions, feel free to contact us.</p>
            <p>Warm regards,</p>
            <p><strong>Abe Garage Team</strong></p>
            <img src="cid:garageImage" alt="Abe Garage" style="width:100%; max-width:600px;" />
        `,
        // attachments: [
        //     {
        //         path: logoPath, // Update path to your image
        //     },
        // ],
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.json({ Status: true, Message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.json({ Status: false, Message: 'Failed to send email', Error: error });
    }
});





router.put('/update-status', [auth, admin], async (req, res) => {
    const { customerId, newStatus } = req.body; // `vehicleId` is the vehicle's ID, `status` is the new status
    const validStatuses = ['Pending', 'Approved', 'Rejected'];

    if (!validStatuses.includes(newStatus)) {
        return res.status(400).json({ Status: false, Error: 'Invalid status value' });
    }

    const sql = 'UPDATE common_services SET status = ? WHERE customer_id = ?';

    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [newStatus, customerId], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });

        if (result.affectedRows > 0) {
            res.json({ Status: true, Message: 'Status updated successfully' });
        } else {
            res.status(404).json({ Status: false, Message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ Status: false, Error: error.message });
    }
});

router.get('/get-update-status', (req, res) => {
    const sql = 'SELECT * FROM common_services'

    connection.query(sql, (err, result) => {
        if (err) { return res.json({ Status: false, Error: err }) }

        return res.json({ Status: false, Result: result })
    })
})

router.post('/add-garage-service', [auth, admin], (req, res) => {
    const sql = `INSERT INTO services (name, description) VALUES (?)`;
    const values = [
        req.body.service,
        req.body.description
    ];

    connection.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err); // Log detailed error
            return res.status(500).json({ Status: false, Error: err });
        }
        return res.status(200).json({ Status: true, Result: result });
    });
});

router.get('/get-garage-servic', (req, res) => {

    const sql = 'SELECT * FROM services ';
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: err });
        }
        return res.json({ Status: true, Result: result });
    });
});

router.delete('/delete-garage-service/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM services WHERE service_id = ?`
    connection.query(sql, [id], (err, result) => {
        if (err) { return res.json({ status: false, Error: 'Query Error' }) }
        return res.json({ status: true, Result: result })
    })
})



router.get('/service_count', (req, res) => {
    const sql = 'SELECT COUNT(service_id) AS services FROM services';
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Service Count Query Error:', err);
            return res.json({ Status: false, error: 'Failed to fetch service count' });
        }
        res.json({ Status: true, Result: result });
    });
});

router.get('/customer_count', (req, res) => {
    const sql = 'select count(customer_id) as customers from customers'
    connection.query(sql, (err, result) => {
        if (err) res.json({ status: false, Error: 'Query Error' })
        return res.json({ status: true, Result: result })
    })
})

router.get('/approve_count', (req, res) => {
    const sql = "SELECT COUNT(*) AS approve FROM common_services WHERE status = 'Approved'";
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Approve Count Query Error:', err);
            return res.json({ Status: false, error: 'Query Error' });
        }
        res.json({ Status: true, Result: result });
    });
});

router.get('/employee_count', (req, res) => {
    const sql = 'SELECT COUNT(employee_id) AS employee FROM employees'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Approve Count Query Error:', err);
            return res.json({ Status: false, error: 'Query Error' });
        }
        res.json({ Status: true, Result: result });
    });
})


router.delete('/delete-customer/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM customers WHERE customer_id = ?`
    connection.query(sql, [id], (err, result) => {
        if (err) { return res.status(500).json({ Status: false, Error: err }) }

        return res.status(200).json({ Status: true, Result: result })
    })
})





module.exports = { admin: router };

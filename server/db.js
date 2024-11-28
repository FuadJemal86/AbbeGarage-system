const connection = require('./data base connection/connection');

connection.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');

    const sqlStatements = [
        `CREATE TABLE IF NOT EXISTS employees (
            employee_id INT(11) NOT NULL AUTO_INCREMENT,
            is_active TINYINT(1) DEFAULT 1,
            employee_email VARCHAR(255) NOT NULL,
            employee_first_name VARCHAR(255) NOT NULL,
            employee_last_name VARCHAR(255) NOT NULL,
            employee_phone VARCHAR(255) NOT NULL,
            added_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            employee_password VARCHAR(255) NOT NULL,
            employee_role VARCHAR(255) NOT NULL,
            UNIQUE (employee_email),
            PRIMARY KEY (employee_id)
        );`,

        `CREATE TABLE IF NOT EXISTS customers (
            customer_id INT(11) NOT NULL AUTO_INCREMENT,
            customer_email VARCHAR(255) NOT NULL,
            customer_first_name VARCHAR(255) NOT NULL,
            customer_last_name VARCHAR(255) NOT NULL,
            is_active TINYINT(1) DEFAULT 1,
            customer_phone VARCHAR(255) NOT NULL,
            added_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE (customer_email),
            PRIMARY KEY (customer_id)
        );`,

        `CREATE TABLE IF NOT EXISTS common_services (
            service_id INT(11) NOT NULL AUTO_INCREMENT,
            customer_id INT(11) NOT NULL, 
            service_name VARCHAR(255) NOT NULL,
            service_description TEXT,
            status ENUM('Pending', 'Approved', 'Rejected') NOT NULL DEFAULT 'Pending',
            PRIMARY KEY (service_id),
            FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
);`,


        `CREATE TABLE IF NOT EXISTS admins (
            admin_id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            admin_email VARCHAR(255) NOT NULL,
            admin_password VARCHAR(255) NOT NULL,
            image VARCHAR(255),
            UNIQUE (admin_email),
            PRIMARY KEY (admin_id)
        );`,

        `CREATE TABLE IF NOT EXISTS customer_vehicle_info (
            vehicle_id INT(11) NOT NULL AUTO_INCREMENT,
            customer_id INT(11) NOT NULL, 
            vehicle_year INT(11) NOT NULL,
            vehicle_make VARCHAR(255) NOT NULL,
            vehicle_model VARCHAR(255) NOT NULL,
            vehicle_type VARCHAR(255) NOT NULL,
            vehicle_mileage INT(11) NOT NULL, 
            vehicle_tag VARCHAR(255) NOT NULL,
            vehicle_serial VARCHAR(255) NOT NULL,
            vehicle_color VARCHAR(255) NOT NULL,
            vehicle_image VARCHAR(255),
            PRIMARY KEY (vehicle_id),
            FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        );`,

        `CREATE TABLE IF NOT EXISTS services (
            service_id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            UNIQUE (name),
            PRIMARY KEY (service_id)
        );`
    ];

    const executeQueries = (queries) => {
        let index = 0;

        const next = () => {
            if (index < queries.length) {
                connection.query(queries[index], (err) => {
                    if (err) {
                        console.error(`Error executing query ${index + 1}:`, err.message);
                    } else {
                        console.log(`Table created/verified for query ${index + 1}`);
                    }
                    index++;
                    next();
                });
            } 
        };

        next();
    };


    executeQueries(sqlStatements);
});

module.exports = connection;

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {      
      name: 'John',
      lastname: 'Cobra',      
      email: 'example@example.com',      
      password:'123456',      
      role:'user',      
      createdAt: new Date(),      
      updatedAt: new Date()      
      },
      {      
        name: 'Alexander',
        lastname: 'Gustavson',      
        email: 'Gustav@kai.com',      
        password:'128533',      
        role:'user',      
        createdAt: new Date(),      
        updatedAt: new Date()      
        },
        {      
          name: 'Nate',
          lastname: 'Diaz',      
          email: 'Nate@diaz.com',      
          password:'123096',      
          role:'user',      
          createdAt: new Date(),      
          updatedAt: new Date()      
          },
          {      
            name: 'Connor',
            lastname: 'MCGregor',      
            email: 'Gregor@mac.com',      
            password:'0983343',      
            role:'user',      
            createdAt: new Date(),      
            updatedAt: new Date()      
            },
            {      
              name: 'Lyoto',
              lastname: 'Machida',      
              email: 'Machida@lyoto.com',      
              password:'1243456',      
              role:'user',      
              createdAt: new Date(),      
              updatedAt: new Date()      
              }                              
      ])      
      },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

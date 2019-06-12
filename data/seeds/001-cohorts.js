
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
        return knex('cohorts').insert([
        {Name: 'Web 19'},
        {Name: 'CS 01'},
        {Name: 'DS 04'}
      ]);
};

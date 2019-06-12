
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
        return knex('students').insert([
        {Name: 'Yasuke', cohort_id: 1},
        {Name: 'Tarzan', cohort_id: 2},
        {Name: 'Rudy', cohort_id: 3}
      ]);
};

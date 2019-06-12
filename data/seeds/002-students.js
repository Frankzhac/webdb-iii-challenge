
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
        return knex('students').insert([
        {Name: 'Yasuke', cohort_id: 5},
        {Name: 'Tarzan', cohort_id: 7},
        {Name: 'Rudy', cohort_id: 24}
      ]);
};

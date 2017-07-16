
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({
          id: 31,
          creator_user_id: '3',
          title: 'Doggos Beach Party',
          description: 'Bring your pups to the beach! All pups welcome.',
          location: 'Sunset Beach Park',
          event_time: new Date('2017-07-23 19:48:31.893241-07'),
          open_status: true
        }),
        knex('events').insert({
          id: 32,
          creator_user_id: '1',
          title: 'Small pups playdate',
          description: 'Playdate at the dog park, small pups only please!',
          location: 'Burnaby Heights Off-leash Park',
          event_time: '2017-06-05 19:48:31.893241-07' ,
          open_status: true
        })
      ])
    });
};
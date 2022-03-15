// Енумы – вспомогательная сущность, которая позволяет лучше структурировать ваш код,
// если присутствуют однотипные переменные.

enum Membership {
  // 0
  Simple,
  // 1
  Strandard,
  // 2
  Premium,
}
const membership = Membership.Strandard
const membershipReverse = Membership[2]
// 1
console.log(membership)
// Premium
console.log(membershipReverse)


enum SocialMedia{
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
}
const social = SocialMedia.INSTAGRAM
// INSTAGRAM
console.log(social);

import models from '@models/index';

const Unit = models.Unit;

const seedUnits = [
  { name: 'gram', shortname: 'g' },
  { name: 'kilo', shortname: 'kg' },
  { name: 'styck', shortname: 'st' },
  { name: 'klyfta', plural: 'klyftor' },
  { name: 'ask', plural: 'askar' },
  { name: 'kryddmått', shortname: 'krm' },
  { name: 'tesked', shortname: 'tsk' },
  { name: 'matsked', shortname: 'msk' },
  { name: 'deciliter', shortname: 'dl' },
  { name: 'liter', shortname: 'l' },
  { name: 'nypa', plural: 'nypor' },
  { name: 'skiva', plural: 'skivor' },
];

export const unitSeeder = async () => {
  // await Unit.deleteMany({});
  await Unit.insertMany(seedUnits);
};

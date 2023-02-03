import dbConnect, { dbDisconnect } from 'db/config/index';
import { unitSeeder } from '@seeders/unit.seeder';

dbConnect();

const seederHandler = async () => {
  await unitSeeder();
};

seederHandler().then(() => {
  dbDisconnect();
});

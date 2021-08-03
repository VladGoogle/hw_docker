import Router from 'koa-router';
import { getAddress } from './controller';

const router = new Router({ prefix: '/address' });

router.get('/:id', getAddress)

export default router;

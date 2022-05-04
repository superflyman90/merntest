import { Router } from 'express';

const router = Router();

router.get('/',(req, res) => {
    res.send('test OK')
});

router.get('/api', (_,res) => {
    res.send({
        name: 'Manfred',
        age: 41
    })
})



export default router;
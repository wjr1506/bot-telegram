
import { Router, Request, Response } from "express";

const router = Router();

router.post('/webhook', async (req: Request<{}, {}, {}>, res: Response) => {
    return res.sendStatus(200)
});

export { router };
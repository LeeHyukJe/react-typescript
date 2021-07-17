import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`현재 서버가 시작합니다. ${port}로 시작!`));

import pool from '../config/db';

class TodosController {
  public async get(req: any, res: any) {
    try {
      const client = await pool.connect();

      const sql = 'SELECT * FROM table';
      const { rows } = await client.query(sql);
      const data = rows;

      client.release();

      res.send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default TodosController;

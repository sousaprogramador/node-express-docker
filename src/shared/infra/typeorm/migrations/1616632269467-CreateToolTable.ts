import { MigrationInterface, QueryRunner , Table } from "typeorm";

export class CreateToolTable1616632269467 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(new Table({
      name : 'tools',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          default: 'uuid_generate_v4()'
        },
        {
          name: 'title',
          type: 'varchar'
        },
        {
          name: 'link',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'tags',
          type: 'text'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tools');
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }

}

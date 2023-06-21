using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApplicationServer.Migrations
{
    /// <inheritdoc />
    public partial class Chat1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Register");

            migrationBuilder.DropColumn(
                name: "ModifiedAt",
                table: "Register");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Register");

            migrationBuilder.AlterColumn<DateTime>(
                name: "AddedAt",
                table: "Register",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "AddedAt",
                table: "Register",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CreatedBy",
                table: "Register",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedAt",
                table: "Register",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<Guid>(
                name: "ModifiedBy",
                table: "Register",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}

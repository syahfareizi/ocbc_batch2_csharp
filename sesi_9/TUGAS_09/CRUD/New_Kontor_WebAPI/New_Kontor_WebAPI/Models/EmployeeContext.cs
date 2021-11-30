using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace New_Kantor_WebAPI.Models
{
    public class EmployeeContext
    {
        public string ConnectionString { get; set; }

        public EmployeeContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
        public List<EmployeeItem> GetAllEmployee()
        {
            List<EmployeeItem> list = new List<EmployeeItem>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM employee", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new EmployeeItem()
                        {
                            id = reader.GetInt32("id"),
                            nama = reader.GetString("nama"),
                            jenisKelamin = reader.GetString("jenis_kelamin"),
                            alamat = reader.GetString("alamat")

                        });
                    }
                }
            }
            return list;
        }
        public List<EmployeeItem> GetEmployee(string id)
        {
            List<EmployeeItem> list = new List<EmployeeItem>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from employee where id=@id", conn);
                cmd.Parameters.AddWithValue("@id", id);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new EmployeeItem()
                        {
                            id = reader.GetInt32("id"),
                            nama = reader.GetString("nama"),
                            jenisKelamin = reader.GetString("jenis_kelamin"),
                            alamat = reader.GetString("alamat")
                        });
                    }
                } 
            }
            return list;
        }
        public JsonResult DeleteEmployee(string id)
        {
            string result;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("delete from employee where id=@id", conn);
                cmd.Parameters.AddWithValue("@id", id);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader != null)
                    {
                        result = "Data Deleted!";
                    }
                    else
                    {
                        result = "Something Went Wrong!";
                    }
                }
            }
            return new JsonResult(result);
        }
        public JsonResult PutEmployee(string id,EmployeeItem item)
        {
            string result;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand($"update employee set nama='{ item.nama }',jenis_kelamin='{item.jenisKelamin}',alamat='{item.alamat}' where id=@id", conn);
                cmd.Parameters.AddWithValue("@id", id);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                        if (reader != null)
                        {
                            result = "Data Updated!";
                        }
                        else
                        {
                            result = "Something Went Wrong!";
                        }
                }
            }
            return new JsonResult(result);
        }   
        public JsonResult PostEmployee(EmployeeItem item)
        {
            string result;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand($"insert into employee(nama,jenis_kelamin,alamat) values('{item.nama}','{item.jenisKelamin}','{item.alamat}');", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                        if (reader != null)
                        {
                            result = "Data Added!";
                        }
                        else
                        {
                            result = "Something Went Wrong!";
                        }
                }
            }
            return new JsonResult(result);
        }
    }
}
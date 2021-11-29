using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using System.Windows.Forms;

namespace FormLogin
{
    public class config
    {
        string ConectionString = ""; // save connection string
        public MySqlConnection connection = null;
        public string server = "localhost"; //  MySQL host / ip of the computer
        public string user = "root"; // MySQL user
        public string password = ""; //MySQL Password
        DataSet ds;
        DataTable dt;
        public string Table = "user_info"; // initialize db table
        public string ConnectionType = " ";
        string RecordSource = "";

        DataGridView tempdata;
        public config() { }
        // function to connect to the database
        public void Connect(string database_name)
        {
            try
            {
                 ConectionString = "SERVER=" + server + ";"+"DATABASE=" + database_name + ";" + "UID=" + user + ";" + "PASSWORD=" + password + ";";
                 connection = new MySqlConnection(ConectionString);
            }
            catch (Exception E)
            {
                MessageBox.Show(E.Message);
            }
        }
        // Function to execute select statements
        public void ExecuteSql(string Sql_commnad) { nowquiee(Sql_commnad); }

// Create connection to MySQL before execution
        public void nowquiee(string Sql_comm)
        {
            try
            {
                {
                    MySqlConnection cs = new MySqlConnection(ConectionString);
                    cs.Open();
                    MySqlCommand myc = new MySqlCommand(Sql_comm, cs);
                    myc.ExecuteNonQuery();
                    cs.Close();
                }
            }
            catch (Exception err)
            {

                MessageBox.Show(err.Message);
            }
        }
        //function to execute delete,insert dan update
        public void Execute(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;
            dt = new DataTable(ConnectionType);
            try
            {
                string command = RecordSource.ToUpper();
                //==========if SQL Contain select=========
                MySqlDataAdapter da2 = new MySqlDataAdapter(RecordSource, connection);
                DataSet tempds = new DataSet();
                da2.Fill(tempds,ConnectionType);
            }
            catch (Exception err){ MessageBox.Show(err.Message); }
                
            
        }
    //function to bring selected results based on column name and row index
        public string Results(int ROW, string COLUMN_NAME)
        {
            try
            {
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
                return ("");
            }
        }
        public string Results(int ROW,int COLUMN_NAME)
        {
            try
            {
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
            catch (Exception err)
            {
                MessageBox.Show(err.Message);
                return dt.Rows[ROW][COLUMN_NAME].ToString();
            }
        } 
        public void ExecutableSelect(string Sql_command)
        {
            RecordSource = Sql_command;
            ConnectionType = Table;

            dt = new DataTable(ConnectionType);
            try
            {
                string command = RecordSource.ToUpper();
                MySqlDataAdapter da = new MySqlDataAdapter(RecordSource, connection);
                ds = new DataSet();
                da.Fill(ds,ConnectionType);
                da.Fill(dt);
                tempdata = new DataGridView();
            }
            catch (Exception err)
            {
                 MessageBox.Show(err.Message);
            }
        }
        public int Count()
        {
            return dt.Rows.Count;
        }
    }
}

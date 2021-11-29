using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FormLogin
{
    public partial class Register : Form
    {
        config db = new config();
        public Register()
        {
            InitializeComponent();
            db.Connect("userdata");
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void btnRegister_Click(object sender, EventArgs e)
        {
            db.Execute("insert into user_info(NAMES,username,PASSWORD) values('"+inNama.Text+"','"+inUsername.Text+"','"+inPassword.Text+"');");
        }
    }
}

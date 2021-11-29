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
    public partial class frmLogin : Form
    {
        config db = new config();
        public frmLogin()
        {
            InitializeComponent();
            db.Connect("userdata");
        }

        private void lblRegister_Click(object sender, EventArgs e)
        {
            Register register = new Register();
            register.Show();
        }

        private void lblUsername_Click(object sender, EventArgs e)
        {

        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            db.ExecutableSelect("select * from user_info where username='" + inUsername.Text+"'" + " and PASSWORD='" + inPassword.Text+"'");

            if (db.Count() == 1)
            {
                MessageBox.Show("Success you will login as " + db.Results(0, "NAMES"));
            }
            else
            {
                MessageBox.Show("Wrong Username and Password Combination");
            }

        }
    }
}

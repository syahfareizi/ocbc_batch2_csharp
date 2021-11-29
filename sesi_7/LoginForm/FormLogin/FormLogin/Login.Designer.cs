
namespace FormLogin
{
    partial class frmLogin
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmLogin));
            this.panel1 = new System.Windows.Forms.Panel();
            this.lblRegister = new System.Windows.Forms.Label();
            this.lblPassword = new System.Windows.Forms.Label();
            this.lblUsername = new System.Windows.Forms.Label();
            this.btnRegister = new System.Windows.Forms.Button();
            this.btnLogin = new System.Windows.Forms.Button();
            this.inPassword = new System.Windows.Forms.TextBox();
            this.inUsername = new System.Windows.Forms.TextBox();
            this.gmbBackground = new System.Windows.Forms.PictureBox();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gmbBackground)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.AutoSize = true;
            this.panel1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel1.Controls.Add(this.lblRegister);
            this.panel1.Controls.Add(this.lblPassword);
            this.panel1.Controls.Add(this.lblUsername);
            this.panel1.Controls.Add(this.btnRegister);
            this.panel1.Controls.Add(this.btnLogin);
            this.panel1.Controls.Add(this.inPassword);
            this.panel1.Controls.Add(this.inUsername);
            this.panel1.Controls.Add(this.gmbBackground);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(716, 419);
            this.panel1.TabIndex = 0;
            // 
            // lblRegister
            // 
            this.lblRegister.AutoSize = true;
            this.lblRegister.Location = new System.Drawing.Point(30, 376);
            this.lblRegister.Name = "lblRegister";
            this.lblRegister.Size = new System.Drawing.Size(109, 13);
            this.lblRegister.TabIndex = 7;
            this.lblRegister.Text = "Bergabung sekarang!";
            this.lblRegister.Click += new System.EventHandler(this.lblRegister_Click);
            // 
            // lblPassword
            // 
            this.lblPassword.AutoSize = true;
            this.lblPassword.Location = new System.Drawing.Point(80, 231);
            this.lblPassword.Name = "lblPassword";
            this.lblPassword.Size = new System.Drawing.Size(70, 13);
            this.lblPassword.TabIndex = 6;
            this.lblPassword.Text = "PASSWORD";
            // 
            // lblUsername
            // 
            this.lblUsername.AutoSize = true;
            this.lblUsername.BackColor = System.Drawing.SystemColors.Control;
            this.lblUsername.Location = new System.Drawing.Point(82, 196);
            this.lblUsername.Name = "lblUsername";
            this.lblUsername.Size = new System.Drawing.Size(68, 13);
            this.lblUsername.TabIndex = 5;
            this.lblUsername.Text = "USERNAME";
            this.lblUsername.Click += new System.EventHandler(this.lblUsername_Click);
            // 
            // btnRegister
            // 
            this.btnRegister.Location = new System.Drawing.Point(157, 371);
            this.btnRegister.Name = "btnRegister";
            this.btnRegister.Size = new System.Drawing.Size(75, 23);
            this.btnRegister.TabIndex = 4;
            this.btnRegister.Text = "Register";
            this.btnRegister.UseVisualStyleBackColor = true;
            this.btnRegister.Click += new System.EventHandler(this.lblRegister_Click);
            // 
            // btnLogin
            // 
            this.btnLogin.Location = new System.Drawing.Point(123, 269);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(75, 23);
            this.btnLogin.TabIndex = 2;
            this.btnLogin.Text = "Login";
            this.btnLogin.UseVisualStyleBackColor = true;
            this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
            // 
            // inPassword
            // 
            this.inPassword.Location = new System.Drawing.Point(175, 224);
            this.inPassword.Name = "inPassword";
            this.inPassword.Size = new System.Drawing.Size(100, 20);
            this.inPassword.TabIndex = 1;
            // 
            // inUsername
            // 
            this.inUsername.Location = new System.Drawing.Point(175, 189);
            this.inUsername.Name = "inUsername";
            this.inUsername.Size = new System.Drawing.Size(100, 20);
            this.inUsername.TabIndex = 0;
            // 
            // gmbBackground
            // 
            this.gmbBackground.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("gmbBackground.BackgroundImage")));
            this.gmbBackground.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.gmbBackground.Dock = System.Windows.Forms.DockStyle.Fill;
            this.gmbBackground.Location = new System.Drawing.Point(0, 0);
            this.gmbBackground.Name = "gmbBackground";
            this.gmbBackground.Size = new System.Drawing.Size(716, 419);
            this.gmbBackground.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.gmbBackground.TabIndex = 8;
            this.gmbBackground.TabStop = false;
            // 
            // frmLogin
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(716, 419);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "frmLogin";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form Login";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gmbBackground)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label lblRegister;
        private System.Windows.Forms.Label lblPassword;
        private System.Windows.Forms.Label lblUsername;
        private System.Windows.Forms.Button btnRegister;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.TextBox inPassword;
        private System.Windows.Forms.TextBox inUsername;
        private System.Windows.Forms.PictureBox gmbBackground;
    }
}


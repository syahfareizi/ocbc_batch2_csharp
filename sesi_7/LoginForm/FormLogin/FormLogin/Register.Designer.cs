
namespace FormLogin
{
    partial class Register
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Register));
            this.panel1 = new System.Windows.Forms.Panel();
            this.lblLogin = new System.Windows.Forms.Label();
            this.btnLogin = new System.Windows.Forms.Button();
            this.btnRegister = new System.Windows.Forms.Button();
            this.inPassword = new System.Windows.Forms.TextBox();
            this.inUsername = new System.Windows.Forms.TextBox();
            this.inNama = new System.Windows.Forms.TextBox();
            this.lblPassword = new System.Windows.Forms.Label();
            this.lblUsername = new System.Windows.Forms.Label();
            this.lblNama = new System.Windows.Forms.Label();
            this.backgroundImage = new System.Windows.Forms.PictureBox();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.backgroundImage)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.AutoSize = true;
            this.panel1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel1.Controls.Add(this.lblLogin);
            this.panel1.Controls.Add(this.btnLogin);
            this.panel1.Controls.Add(this.btnRegister);
            this.panel1.Controls.Add(this.inPassword);
            this.panel1.Controls.Add(this.inUsername);
            this.panel1.Controls.Add(this.inNama);
            this.panel1.Controls.Add(this.lblPassword);
            this.panel1.Controls.Add(this.lblUsername);
            this.panel1.Controls.Add(this.lblNama);
            this.panel1.Controls.Add(this.backgroundImage);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(628, 450);
            this.panel1.TabIndex = 0;
            // 
            // lblLogin
            // 
            this.lblLogin.AutoSize = true;
            this.lblLogin.Location = new System.Drawing.Point(91, 403);
            this.lblLogin.Name = "lblLogin";
            this.lblLogin.Size = new System.Drawing.Size(88, 13);
            this.lblLogin.TabIndex = 10;
            this.lblLogin.Text = "Login Sekarang !";
            this.lblLogin.Click += new System.EventHandler(this.label4_Click);
            // 
            // btnLogin
            // 
            this.btnLogin.Location = new System.Drawing.Point(192, 398);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(75, 23);
            this.btnLogin.TabIndex = 9;
            this.btnLogin.Text = "Login";
            this.btnLogin.UseVisualStyleBackColor = true;
            this.btnLogin.Click += new System.EventHandler(this.button1_Click);
            // 
            // btnRegister
            // 
            this.btnRegister.Location = new System.Drawing.Point(94, 315);
            this.btnRegister.Name = "btnRegister";
            this.btnRegister.Size = new System.Drawing.Size(75, 23);
            this.btnRegister.TabIndex = 8;
            this.btnRegister.Text = "Register";
            this.btnRegister.UseVisualStyleBackColor = true;
            this.btnRegister.Click += new System.EventHandler(this.btnRegister_Click);
            // 
            // inPassword
            // 
            this.inPassword.Location = new System.Drawing.Point(149, 256);
            this.inPassword.Name = "inPassword";
            this.inPassword.Size = new System.Drawing.Size(100, 20);
            this.inPassword.TabIndex = 6;
            // 
            // inUsername
            // 
            this.inUsername.Location = new System.Drawing.Point(149, 222);
            this.inUsername.Name = "inUsername";
            this.inUsername.Size = new System.Drawing.Size(100, 20);
            this.inUsername.TabIndex = 5;
            // 
            // inNama
            // 
            this.inNama.Location = new System.Drawing.Point(149, 188);
            this.inNama.Name = "inNama";
            this.inNama.Size = new System.Drawing.Size(100, 20);
            this.inNama.TabIndex = 4;
            // 
            // lblPassword
            // 
            this.lblPassword.AutoSize = true;
            this.lblPassword.Location = new System.Drawing.Point(44, 256);
            this.lblPassword.Name = "lblPassword";
            this.lblPassword.Size = new System.Drawing.Size(59, 13);
            this.lblPassword.TabIndex = 3;
            this.lblPassword.Text = "Password :";
            // 
            // lblUsername
            // 
            this.lblUsername.AutoSize = true;
            this.lblUsername.Location = new System.Drawing.Point(44, 222);
            this.lblUsername.Name = "lblUsername";
            this.lblUsername.Size = new System.Drawing.Size(61, 13);
            this.lblUsername.TabIndex = 2;
            this.lblUsername.Text = "Username :";
            // 
            // lblNama
            // 
            this.lblNama.AutoSize = true;
            this.lblNama.Location = new System.Drawing.Point(44, 188);
            this.lblNama.Name = "lblNama";
            this.lblNama.Size = new System.Drawing.Size(41, 13);
            this.lblNama.TabIndex = 1;
            this.lblNama.Text = "Nama :";
            this.lblNama.Click += new System.EventHandler(this.label1_Click);
            // 
            // backgroundImage
            // 
            this.backgroundImage.Dock = System.Windows.Forms.DockStyle.Fill;
            this.backgroundImage.Image = ((System.Drawing.Image)(resources.GetObject("backgroundImage.Image")));
            this.backgroundImage.Location = new System.Drawing.Point(0, 0);
            this.backgroundImage.Name = "backgroundImage";
            this.backgroundImage.Size = new System.Drawing.Size(628, 450);
            this.backgroundImage.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.backgroundImage.TabIndex = 0;
            this.backgroundImage.TabStop = false;
            this.backgroundImage.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // Register
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(628, 450);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Register";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Register";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.backgroundImage)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.PictureBox backgroundImage;
        private System.Windows.Forms.Label lblPassword;
        private System.Windows.Forms.Label lblUsername;
        private System.Windows.Forms.Label lblNama;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Button btnRegister;
        private System.Windows.Forms.TextBox inPassword;
        private System.Windows.Forms.TextBox inUsername;
        private System.Windows.Forms.TextBox inNama;
        private System.Windows.Forms.Label lblLogin;
    }
}
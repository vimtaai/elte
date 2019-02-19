namespace gyak01
{
    partial class Ablak
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
            this.BemenetiMező = new System.Windows.Forms.TextBox();
            this.TömörítGomb = new System.Windows.Forms.Button();
            this.SzámrendeszerKimenetiMező = new System.Windows.Forms.TextBox();
            this.DarabszámKimenetiMező = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // BemenetiMező
            // 
            this.BemenetiMező.Location = new System.Drawing.Point(13, 13);
            this.BemenetiMező.Name = "BemenetiMező";
            this.BemenetiMező.Size = new System.Drawing.Size(359, 20);
            this.BemenetiMező.TabIndex = 0;
            // 
            // TömörítGomb
            // 
            this.TömörítGomb.Location = new System.Drawing.Point(297, 126);
            this.TömörítGomb.Name = "TömörítGomb";
            this.TömörítGomb.Size = new System.Drawing.Size(75, 23);
            this.TömörítGomb.TabIndex = 1;
            this.TömörítGomb.Text = "Tömörít";
            this.TömörítGomb.UseVisualStyleBackColor = true;
            this.TömörítGomb.Click += new System.EventHandler(this.TömörítGombKattintás);
            // 
            // SzámrendeszerKimenetiMező
            // 
            this.SzámrendeszerKimenetiMező.BackColor = System.Drawing.SystemColors.ControlLight;
            this.SzámrendeszerKimenetiMező.Enabled = false;
            this.SzámrendeszerKimenetiMező.Location = new System.Drawing.Point(13, 62);
            this.SzámrendeszerKimenetiMező.Name = "SzámrendeszerKimenetiMező";
            this.SzámrendeszerKimenetiMező.Size = new System.Drawing.Size(359, 20);
            this.SzámrendeszerKimenetiMező.TabIndex = 2;
            // 
            // DarabszámKimenetiMező
            // 
            this.DarabszámKimenetiMező.BackColor = System.Drawing.SystemColors.ControlLight;
            this.DarabszámKimenetiMező.Enabled = false;
            this.DarabszámKimenetiMező.Location = new System.Drawing.Point(13, 88);
            this.DarabszámKimenetiMező.Name = "DarabszámKimenetiMező";
            this.DarabszámKimenetiMező.Size = new System.Drawing.Size(359, 20);
            this.DarabszámKimenetiMező.TabIndex = 3;
            // 
            // Ablak
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(384, 161);
            this.Controls.Add(this.DarabszámKimenetiMező);
            this.Controls.Add(this.SzámrendeszerKimenetiMező);
            this.Controls.Add(this.TömörítGomb);
            this.Controls.Add(this.BemenetiMező);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Ablak";
            this.Text = "Tömörítés";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox BemenetiMező;
        private System.Windows.Forms.Button TömörítGomb;
        private System.Windows.Forms.TextBox SzámrendeszerKimenetiMező;
        private System.Windows.Forms.TextBox DarabszámKimenetiMező;
    }
}


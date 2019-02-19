namespace gyak02
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
            this.Tömörítetlen = new System.Windows.Forms.TextBox();
            this.Tömörített = new System.Windows.Forms.TextBox();
            this.TömörítGomb = new System.Windows.Forms.Button();
            this.KitömörítGomb = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Tömörítetlen
            // 
            this.Tömörítetlen.Font = new System.Drawing.Font("Consolas", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.Tömörítetlen.Location = new System.Drawing.Point(13, 13);
            this.Tömörítetlen.Multiline = true;
            this.Tömörítetlen.Name = "Tömörítetlen";
            this.Tömörítetlen.Size = new System.Drawing.Size(359, 50);
            this.Tömörítetlen.TabIndex = 0;
            // 
            // Tömörített
            // 
            this.Tömörített.Font = new System.Drawing.Font("Consolas", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.Tömörített.Location = new System.Drawing.Point(13, 69);
            this.Tömörített.Multiline = true;
            this.Tömörített.Name = "Tömörített";
            this.Tömörített.Size = new System.Drawing.Size(359, 50);
            this.Tömörített.TabIndex = 1;
            // 
            // TömörítGomb
            // 
            this.TömörítGomb.Location = new System.Drawing.Point(297, 126);
            this.TömörítGomb.Name = "TömörítGomb";
            this.TömörítGomb.Size = new System.Drawing.Size(75, 23);
            this.TömörítGomb.TabIndex = 2;
            this.TömörítGomb.Text = "Tömörít";
            this.TömörítGomb.UseVisualStyleBackColor = true;
            this.TömörítGomb.Click += new System.EventHandler(this.TömörítGombKattintás);
            // 
            // KitömörítGomb
            // 
            this.KitömörítGomb.Location = new System.Drawing.Point(216, 126);
            this.KitömörítGomb.Name = "KitömörítGomb";
            this.KitömörítGomb.Size = new System.Drawing.Size(75, 23);
            this.KitömörítGomb.TabIndex = 3;
            this.KitömörítGomb.Text = "Kitömörít";
            this.KitömörítGomb.UseVisualStyleBackColor = true;
            this.KitömörítGomb.Click += new System.EventHandler(this.KitömörítGombKattintás);
            // 
            // Ablak
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(384, 161);
            this.Controls.Add(this.KitömörítGomb);
            this.Controls.Add(this.TömörítGomb);
            this.Controls.Add(this.Tömörített);
            this.Controls.Add(this.Tömörítetlen);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Ablak";
            this.Text = "Tömörítő";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox Tömörítetlen;
        private System.Windows.Forms.TextBox Tömörített;
        private System.Windows.Forms.Button TömörítGomb;
        private System.Windows.Forms.Button KitömörítGomb;
    }
}


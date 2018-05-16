namespace Keptomorito
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
            this.menuSav = new System.Windows.Forms.MenuStrip();
            this.fájlToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.megnyitásToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.mentésMáskéntToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.kilépésToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.kepHelye = new System.Windows.Forms.PictureBox();
            this.fajlMegnyito = new System.Windows.Forms.OpenFileDialog();
            this.fajlMento = new System.Windows.Forms.SaveFileDialog();
            this.menuSav.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.kepHelye)).BeginInit();
            this.SuspendLayout();
            // 
            // menuSav
            // 
            this.menuSav.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fájlToolStripMenuItem});
            this.menuSav.Location = new System.Drawing.Point(0, 0);
            this.menuSav.Name = "menuSav";
            this.menuSav.Size = new System.Drawing.Size(422, 24);
            this.menuSav.TabIndex = 2;
            this.menuSav.Text = "Menü";
            // 
            // fájlToolStripMenuItem
            // 
            this.fájlToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.megnyitásToolStripMenuItem,
            this.mentésMáskéntToolStripMenuItem,
            this.kilépésToolStripMenuItem});
            this.fájlToolStripMenuItem.Name = "fájlToolStripMenuItem";
            this.fájlToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.fájlToolStripMenuItem.Text = "Fájl";
            // 
            // megnyitásToolStripMenuItem
            // 
            this.megnyitásToolStripMenuItem.Name = "megnyitásToolStripMenuItem";
            this.megnyitásToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.O)));
            this.megnyitásToolStripMenuItem.Size = new System.Drawing.Size(201, 22);
            this.megnyitásToolStripMenuItem.Text = "Megnyitás";
            this.megnyitásToolStripMenuItem.Click += new System.EventHandler(this.megnyitasToolStripMenuItem_Click);
            // 
            // mentésMáskéntToolStripMenuItem
            // 
            this.mentésMáskéntToolStripMenuItem.Name = "mentésMáskéntToolStripMenuItem";
            this.mentésMáskéntToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.S)));
            this.mentésMáskéntToolStripMenuItem.Size = new System.Drawing.Size(201, 22);
            this.mentésMáskéntToolStripMenuItem.Text = "Mentés másként";
            this.mentésMáskéntToolStripMenuItem.Click += new System.EventHandler(this.mentesMaskentToolStripMenuItem_Click);
            // 
            // kilépésToolStripMenuItem
            // 
            this.kilépésToolStripMenuItem.Name = "kilépésToolStripMenuItem";
            this.kilépésToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.K)));
            this.kilépésToolStripMenuItem.Size = new System.Drawing.Size(201, 22);
            this.kilépésToolStripMenuItem.Text = "Kilépés";
            this.kilépésToolStripMenuItem.Click += new System.EventHandler(this.kilepesToolStripMenuItem_Click);
            // 
            // kepHelye
            // 
            this.kepHelye.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.kepHelye.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.kepHelye.Location = new System.Drawing.Point(12, 27);
            this.kepHelye.Name = "kepHelye";
            this.kepHelye.Size = new System.Drawing.Size(398, 346);
            this.kepHelye.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.kepHelye.TabIndex = 3;
            this.kepHelye.TabStop = false;
            // 
            // fajlMegnyito
            // 
            this.fajlMegnyito.Filter = "Bitmap|*.bmp";
            // 
            // fajlMento
            // 
            this.fajlMento.Filter = "Képfájl|.kep|Tömörített képfájl|.tkep";
            // 
            // Ablak
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(422, 385);
            this.Controls.Add(this.kepHelye);
            this.Controls.Add(this.menuSav);
            this.Name = "Ablak";
            this.Text = "Képtömörítő";
            this.menuSav.ResumeLayout(false);
            this.menuSav.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.kepHelye)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuSav;
        private System.Windows.Forms.ToolStripMenuItem fájlToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem megnyitásToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem kilépésToolStripMenuItem;
        private System.Windows.Forms.PictureBox kepHelye;
        private System.Windows.Forms.OpenFileDialog fajlMegnyito;
        private System.Windows.Forms.SaveFileDialog fajlMento;
        private System.Windows.Forms.ToolStripMenuItem mentésMáskéntToolStripMenuItem;
    }
}


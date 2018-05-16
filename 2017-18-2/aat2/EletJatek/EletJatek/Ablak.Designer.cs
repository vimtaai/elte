namespace EletJatek
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
            this.components = new System.ComponentModel.Container();
            this.jatekTer = new System.Windows.Forms.Panel();
            this.startGomb = new System.Windows.Forms.Button();
            this.stopGomb = new System.Windows.Forms.Button();
            this.torolGomb = new System.Windows.Forms.Button();
            this.lepesekSzamaFelirat = new System.Windows.Forms.Label();
            this.lepesekSzama = new System.Windows.Forms.Label();
            this.lepeskozErtek = new System.Windows.Forms.NumericUpDown();
            this.lepeskozFelirat = new System.Windows.Forms.Label();
            this.idozito = new System.Windows.Forms.Timer(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.lepeskozErtek)).BeginInit();
            this.SuspendLayout();
            // 
            // jatekTer
            // 
            this.jatekTer.Location = new System.Drawing.Point(12, 12);
            this.jatekTer.Name = "jatekTer";
            this.jatekTer.Size = new System.Drawing.Size(500, 500);
            this.jatekTer.TabIndex = 0;
            this.jatekTer.Click += new System.EventHandler(this.jatekTer_Click);
            // 
            // startGomb
            // 
            this.startGomb.Location = new System.Drawing.Point(518, 12);
            this.startGomb.Name = "startGomb";
            this.startGomb.Size = new System.Drawing.Size(91, 23);
            this.startGomb.TabIndex = 1;
            this.startGomb.Text = "Start";
            this.startGomb.UseVisualStyleBackColor = true;
            this.startGomb.Click += new System.EventHandler(this.startGomb_Click);
            // 
            // stopGomb
            // 
            this.stopGomb.Location = new System.Drawing.Point(518, 41);
            this.stopGomb.Name = "stopGomb";
            this.stopGomb.Size = new System.Drawing.Size(91, 23);
            this.stopGomb.TabIndex = 2;
            this.stopGomb.Text = "Stop";
            this.stopGomb.UseVisualStyleBackColor = true;
            this.stopGomb.Click += new System.EventHandler(this.stopGomb_Click);
            // 
            // torolGomb
            // 
            this.torolGomb.Location = new System.Drawing.Point(518, 70);
            this.torolGomb.Name = "torolGomb";
            this.torolGomb.Size = new System.Drawing.Size(91, 23);
            this.torolGomb.TabIndex = 3;
            this.torolGomb.Text = "Töröl";
            this.torolGomb.UseVisualStyleBackColor = true;
            this.torolGomb.Click += new System.EventHandler(this.torolGomb_Click);
            // 
            // lepesekSzamaFelirat
            // 
            this.lepesekSzamaFelirat.AutoSize = true;
            this.lepesekSzamaFelirat.Location = new System.Drawing.Point(519, 478);
            this.lepesekSzamaFelirat.Name = "lepesekSzamaFelirat";
            this.lepesekSzamaFelirat.Size = new System.Drawing.Size(84, 13);
            this.lepesekSzamaFelirat.TabIndex = 4;
            this.lepesekSzamaFelirat.Text = "Lépések száma:";
            // 
            // lepesekSzama
            // 
            this.lepesekSzama.AutoSize = true;
            this.lepesekSzama.Location = new System.Drawing.Point(519, 500);
            this.lepesekSzama.Name = "lepesekSzama";
            this.lepesekSzama.Size = new System.Drawing.Size(13, 13);
            this.lepesekSzama.TabIndex = 5;
            this.lepesekSzama.Text = "0";
            // 
            // lepeskozErtek
            // 
            this.lepeskozErtek.Increment = new decimal(new int[] {
            10,
            0,
            0,
            0});
            this.lepeskozErtek.Location = new System.Drawing.Point(518, 119);
            this.lepeskozErtek.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.lepeskozErtek.Minimum = new decimal(new int[] {
            10,
            0,
            0,
            0});
            this.lepeskozErtek.Name = "lepeskozErtek";
            this.lepeskozErtek.Size = new System.Drawing.Size(91, 20);
            this.lepeskozErtek.TabIndex = 6;
            this.lepeskozErtek.Value = new decimal(new int[] {
            100,
            0,
            0,
            0});
            this.lepeskozErtek.ValueChanged += new System.EventHandler(this.lepeskozErtek_ValueChanged);
            // 
            // lepeskozFelirat
            // 
            this.lepeskozFelirat.AutoSize = true;
            this.lepeskozFelirat.Location = new System.Drawing.Point(515, 103);
            this.lepeskozFelirat.Name = "lepeskozFelirat";
            this.lepeskozFelirat.Size = new System.Drawing.Size(53, 13);
            this.lepeskozFelirat.TabIndex = 7;
            this.lepeskozFelirat.Text = "Lépésköz";
            // 
            // idozito
            // 
            this.idozito.Tick += new System.EventHandler(this.idozito_Tick);
            // 
            // Ablak
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(620, 522);
            this.Controls.Add(this.lepeskozFelirat);
            this.Controls.Add(this.lepeskozErtek);
            this.Controls.Add(this.lepesekSzama);
            this.Controls.Add(this.lepesekSzamaFelirat);
            this.Controls.Add(this.torolGomb);
            this.Controls.Add(this.stopGomb);
            this.Controls.Add(this.startGomb);
            this.Controls.Add(this.jatekTer);
            this.Name = "Ablak";
            this.Text = "Életjáték";
            ((System.ComponentModel.ISupportInitialize)(this.lepeskozErtek)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel jatekTer;
        private System.Windows.Forms.Button startGomb;
        private System.Windows.Forms.Button stopGomb;
        private System.Windows.Forms.Button torolGomb;
        private System.Windows.Forms.Label lepesekSzamaFelirat;
        private System.Windows.Forms.Label lepesekSzama;
        private System.Windows.Forms.NumericUpDown lepeskozErtek;
        private System.Windows.Forms.Label lepeskozFelirat;
        private System.Windows.Forms.Timer idozito;
    }
}


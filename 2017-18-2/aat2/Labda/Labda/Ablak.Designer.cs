namespace Labda
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
            this.idozito = new System.Windows.Forms.Timer(this.components);
            this.startGomb = new System.Windows.Forms.Button();
            this.yGravitacio = new System.Windows.Forms.NumericUpDown();
            this.xGravitacio = new System.Windows.Forms.NumericUpDown();
            this.torolGomb = new System.Windows.Forms.Button();
            this.ujLabdaGomb = new System.Windows.Forms.Button();
            this.yGravitacioFelirat = new System.Windows.Forms.Label();
            this.xGravitacioFelirat = new System.Windows.Forms.Label();
            this.stopGomb = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.yGravitacio)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.xGravitacio)).BeginInit();
            this.SuspendLayout();
            // 
            // jatekTer
            // 
            this.jatekTer.Location = new System.Drawing.Point(13, 13);
            this.jatekTer.Name = "jatekTer";
            this.jatekTer.Size = new System.Drawing.Size(500, 500);
            this.jatekTer.TabIndex = 0;
            // 
            // idozito
            // 
            this.idozito.Interval = 17;
            this.idozito.Tick += new System.EventHandler(this.idozito_Tick);
            // 
            // startGomb
            // 
            this.startGomb.Location = new System.Drawing.Point(519, 13);
            this.startGomb.Name = "startGomb";
            this.startGomb.Size = new System.Drawing.Size(91, 23);
            this.startGomb.TabIndex = 1;
            this.startGomb.Text = "Start";
            this.startGomb.UseVisualStyleBackColor = true;
            this.startGomb.Click += new System.EventHandler(this.startGomb_Click);
            // 
            // yGravitacio
            // 
            this.yGravitacio.Increment = new decimal(new int[] {
            100,
            0,
            0,
            0});
            this.yGravitacio.Location = new System.Drawing.Point(519, 121);
            this.yGravitacio.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.yGravitacio.Minimum = new decimal(new int[] {
            1000,
            0,
            0,
            -2147483648});
            this.yGravitacio.Name = "yGravitacio";
            this.yGravitacio.Size = new System.Drawing.Size(91, 20);
            this.yGravitacio.TabIndex = 2;
            // 
            // xGravitacio
            // 
            this.xGravitacio.Increment = new decimal(new int[] {
            100,
            0,
            0,
            0});
            this.xGravitacio.Location = new System.Drawing.Point(519, 160);
            this.xGravitacio.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.xGravitacio.Minimum = new decimal(new int[] {
            1000,
            0,
            0,
            -2147483648});
            this.xGravitacio.Name = "xGravitacio";
            this.xGravitacio.Size = new System.Drawing.Size(91, 20);
            this.xGravitacio.TabIndex = 3;
            // 
            // torolGomb
            // 
            this.torolGomb.Location = new System.Drawing.Point(519, 71);
            this.torolGomb.Name = "torolGomb";
            this.torolGomb.Size = new System.Drawing.Size(91, 23);
            this.torolGomb.TabIndex = 4;
            this.torolGomb.Text = "Töröl";
            this.torolGomb.UseVisualStyleBackColor = true;
            this.torolGomb.Click += new System.EventHandler(this.torolGomb_Click);
            // 
            // ujLabdaGomb
            // 
            this.ujLabdaGomb.Location = new System.Drawing.Point(519, 186);
            this.ujLabdaGomb.Name = "ujLabdaGomb";
            this.ujLabdaGomb.Size = new System.Drawing.Size(91, 23);
            this.ujLabdaGomb.TabIndex = 5;
            this.ujLabdaGomb.Text = "Új labda";
            this.ujLabdaGomb.UseVisualStyleBackColor = true;
            this.ujLabdaGomb.Click += new System.EventHandler(this.ujLabdaGomb_Click);
            // 
            // yGravitacioFelirat
            // 
            this.yGravitacioFelirat.AutoSize = true;
            this.yGravitacioFelirat.Location = new System.Drawing.Point(516, 105);
            this.yGravitacioFelirat.Name = "yGravitacioFelirat";
            this.yGravitacioFelirat.Size = new System.Drawing.Size(63, 13);
            this.yGravitacioFelirat.TabIndex = 8;
            this.yGravitacioFelirat.Text = "Y gravitáció";
            // 
            // xGravitacioFelirat
            // 
            this.xGravitacioFelirat.AutoSize = true;
            this.xGravitacioFelirat.Location = new System.Drawing.Point(516, 144);
            this.xGravitacioFelirat.Name = "xGravitacioFelirat";
            this.xGravitacioFelirat.Size = new System.Drawing.Size(63, 13);
            this.xGravitacioFelirat.TabIndex = 9;
            this.xGravitacioFelirat.Text = "X gravitáció";
            // 
            // stopGomb
            // 
            this.stopGomb.Location = new System.Drawing.Point(519, 42);
            this.stopGomb.Name = "stopGomb";
            this.stopGomb.Size = new System.Drawing.Size(91, 23);
            this.stopGomb.TabIndex = 10;
            this.stopGomb.Text = "Stop";
            this.stopGomb.UseVisualStyleBackColor = true;
            this.stopGomb.Click += new System.EventHandler(this.stopGomb_Click);
            // 
            // Ablak
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(620, 522);
            this.Controls.Add(this.stopGomb);
            this.Controls.Add(this.xGravitacioFelirat);
            this.Controls.Add(this.yGravitacioFelirat);
            this.Controls.Add(this.ujLabdaGomb);
            this.Controls.Add(this.torolGomb);
            this.Controls.Add(this.xGravitacio);
            this.Controls.Add(this.yGravitacio);
            this.Controls.Add(this.startGomb);
            this.Controls.Add(this.jatekTer);
            this.Name = "Ablak";
            this.Text = "Pattogó Labdák";
            ((System.ComponentModel.ISupportInitialize)(this.yGravitacio)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.xGravitacio)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel jatekTer;
        private System.Windows.Forms.Timer idozito;
        private System.Windows.Forms.Button startGomb;
        private System.Windows.Forms.NumericUpDown yGravitacio;
        private System.Windows.Forms.NumericUpDown xGravitacio;
        private System.Windows.Forms.Button torolGomb;
        private System.Windows.Forms.Button ujLabdaGomb;
        private System.Windows.Forms.Label yGravitacioFelirat;
        private System.Windows.Forms.Label xGravitacioFelirat;
        private System.Windows.Forms.Button stopGomb;
    }
}


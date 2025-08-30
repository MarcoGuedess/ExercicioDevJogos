// bola.js

function Bola(context) {
   this.context = context;
   this.x = 0;
   this.y = 0;
   this.velocidadeX = 0;
   this.velocidadeY = 0;
   this.raio = 20;

   // --- INÍCIO DA ALTERAÇÃO ---
   // Atributos para o sprite
   this.img = null;          // A imagem do spritesheet
   this.recorteX = 0;        // A posição X do recorte na imagem
   this.recorteY = 0;        // A posição Y do recorte na imagem
   this.larguraSprite = 135; // A largura de cada sprite na imagem
   this.alturaSprite = 135;  // A altura de cada sprite na imagem
   // --- FIM DA ALTERAÇÃO ---
}

Bola.prototype = {
   atualizar: function() {
      var ctx = this.context;

      if (this.x < 0 || this.x > ctx.canvas.width - this.raio * 2)
         this.velocidadeX *= -1;

      if (this.y < 0 || this.y > ctx.canvas.height - this.raio * 2)
         this.velocidadeY *= -1;

      this.x += this.velocidadeX;
      this.y += this.velocidadeY;
   },

   desenhar: function() {
      var ctx = this.context;
      
      // --- INÍCIO DA ALTERAÇÃO ---
      // Se não temos uma imagem, não desenhamos nada
      if (!this.img) return;

      // Usamos o drawImage para desenhar o sprite
      ctx.drawImage(
         this.img,                // Imagem a ser desenhada
         this.recorteX,           // Posição X do recorte
         this.recorteY,           // Posição Y do recorte
         this.larguraSprite,      // Largura do recorte
         this.alturaSprite,       // Altura do recorte
         this.x,                  // Posição X no canvas
         this.y,                  // Posição Y no canvas
         this.raio * 2,           // Largura da imagem no canvas (o dobro do raio)
         this.raio * 2            // Altura da imagem no canvas (o dobro do raio)
      );
      // --- FIM DA ALTERAÇÃO ---
   }
}
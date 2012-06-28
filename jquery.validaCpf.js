jQuery.fn.validaCpf = function (cpf) {
  this.blur(function () {
    CPF = this.value;
    if (CPF == '') {
      return false;
    }
    erro = new String;
    cpfv = CPF;
    if (cpfv.length == 14) {
      cpfv = cpfv.replace('.', '');
      cpfv = cpfv.replace('.', '');
      cpfv = cpfv.replace('-', '');
      var nonNumbers = /\D/;
      if (nonNumbers.test(cpfv)) {
        erro = "A verificacao de CPF suporta apenas n�meros!";
      } else {
        if (cpfv == "00000000000" || cpfv == "11111111111" || cpfv == "22222222222" || cpfv == "33333333333" || cpfv == "44444444444" || cpfv == "55555555555" || cpfv == "66666666666" || cpfv == "77777777777" || cpfv == "88888888888" || cpfv == "99999999999") {
          erro = "N�mero de CPF inv�lido!";
        }
        var a = [];
        var b = new Number;
        var c = 11;
        for (i = 0; i < 11; i++) {
          a[i] = cpfv.charAt(i);
          if (i < 9) b += (a[i] * --c);
        }
        if ((x = b % 11) < 2) {
          a[9] = 0;
        } else {
          a[9] = 11 - x;
        }
        b = 0;
        c = 11;
        for (y = 0; y < 10; y++)
          b += (a[y] * c--);
        if ((x = b % 11) < 2) {
          a[10] = 0;
        } else {
          a[10] = 11 - x;
        }
        if ((cpfv.charAt(9) != a[9]) || (cpfv.charAt(10) != a[10])) {
          erro = "N�mero de CPF inv�lido.";
        }
      }
    } else {
      if (cpfv.length == 0) {
        return false;
      } else {
        erro = "N�mero de CPF inv�lido.";
      }
    }
    if (erro.length > 0) {
      this.value = '';
      this.focus();
      alert(erro);

      return false;
    }
    return true;
  });
};
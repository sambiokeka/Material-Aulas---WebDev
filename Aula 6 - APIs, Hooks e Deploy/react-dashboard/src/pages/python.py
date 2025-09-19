def pega_numero():
    while True:
        try:
            v = int(input('Digite um numero: '))
            return(v)
        except ValueError:
            return('Não é um numero')

        
print(pega_numero())
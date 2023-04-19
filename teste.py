import numpy as np
import time

# inicialização das estruturas
num_recursos = 6
num_processos = 5

recursos_disponiveis = np.array([5, 3, 2, 1, 4, 2]) # vetor de recursos disponíveis
maximo = np.array([[7, 5, 3, 0, 2, 1], [3, 2, 2, 2, 4, 4], [9, 0, 2, 1, 4, 2], [2, 2, 2, 2, 2, 2], [4, 3, 3, 3, 3, 3]]) # matriz de requisitos máximos de cada processo
alocacao = np.array([[0, 1, 0, 0, 2, 1], [2, 0, 0, 1, 1, 0], [3, 0, 2, 1, 1, 1], [2, 0, 2, 1, 0, 3], [0, 1, 1, 1, 1, 0]]) # matriz de recursos alocados para cada processo
requisicao = np.array([[0, 0, 0, 0, 0, 0], [2, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1], [0, 0, 1, 1, 0, 0]]) # matriz de requisições atuais de cada processo

# funções auxiliares
def precisa(recursos_restantes, maximo, alocacao):
    # calcula a matriz de recursos necessários
    return np.subtract(maximo, alocacao)

def recursos_suficientes(recursos_restantes, processo):
    # verifica se existem recursos suficientes para atender à solicitação do processo
    return np.all(recursos_restantes >= processo)

def executa_processo(processo, recursos_disponiveis, maximo, alocacao):
    # alocar recursos para um processo
    recursos_restantes = np.subtract(recursos_disponiveis, processo)
    alocacao = np.add(alocacao, processo)
    recursos_disponiveis = np.subtract(recursos_disponiveis, processo)
    return recursos_disponiveis, maximo, alocacao

def libera_processo(processo, recursos_disponiveis, alocacao):
    # liberar recursos alocados para um processo
    recursos_liberados = alocacao[processo]
    alocacao[processo] = [0] * num_recursos
    recursos_disponiveis = np.add(recursos_disponiveis, recursos_liberados)
    return recursos_disponiveis, alocacao

# algoritmo do banqueiro
for i in range(6):
    print(f"\nIteração {i + 1}")
    for j in range(num_processos):
        if np.all(requisicao[j] == [0] * num_recursos):
            continue
        if recursos_suficientes(recursos_disponiveis, precisa(recursos_disponiveis, maximo[j], alocacao[j])):
            recursos_disponiveis, maximo, alocacao = executa_processo(precisa(recursos_disponiveis, maximo[j], alocacao[j]), recursos_disponiveis, maximo, alocacao)
            print(f"Processo {j + 1} alocado recursos")
            print(f"Recursos disponíveis: {recursos_disponiveis}")
            print(f"Matriz de alocação:\n{alocacao}")
            print(f"Matriz de recursos máximos:\n{maximo}")
            requisicao[j] = [0] * num_recursos
        else:
            print(f"Processo {j + 1} aguardando recursos") 
    time.sleep(2) # simulação de dinamicidade
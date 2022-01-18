# Anotações

Para que os componentes irmãos, siblings, possam trocar dados, elas precisam passar para o elemento Mãe.

A técnica **Lift the state** (elevar o state) é muito usado no React. Usando props são passados os dados de um estado de um componente para os siblings através do elemento mãe.

**Prop Drilling** é o nome da prática de "perfura" o tempo todo os componentes siblings e passar os dados através de props.

Ao adicionar o Redux podemos resolver o problema de Prop Drilling:
- Todos os componentes podem ler de um lugar chamado "store"
- O Redux possui uma maneira própria de leitura.
- A informação é alterada apenas pelo Redux, cada alteração é pedida pelo redux
- cada alteração pedida para o Redux é feita através de **Actions**
- O Redux altera a informação na Store usando um **Reducer**
- Depois que a modificação for finalizada, ela reflete em todos os lugares que essa informação está sendo usada.

**Single Source of Truth** é o nome dessa técnica, centralizar o local de onde saem todas as informações da aplicação.


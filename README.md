# Automação Mobile com WebdriverIO e Appium

Este repositório contém uma prova de conceito (POC) de um projeto de automação mobile utilizando WebdriverIO com Appium. A seguir, serão detalhados os requisitos necessários para desenvolver a aplicação e destacadas a simplicidade da combinação WebdriverIO com Appium e o uso do Mocha nos testes, ressaltando suas semelhanças na estrutura de desenvolvimento com os testes em Cypress.

## Requisitos

Para que todas essas instalações e configurações sejam possíveis, será necessário a liberação do perfil administrador no notebook.

- **Node.js:** [nodejs.org](https://nodejs.org/).
- **Java JDK:** [oracle.com](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **IDE de Desenvolvimento:** Recomenda-se uma IDE como Visual Studio Code para facilitar o desenvolvimento e a manutenção do código.
- **WebdriverIO e Appium Libraries:** Ao instalar o WebdriverIO, será possível instalar as libraries do appium em [webdriver.io](https://webdriver.io).
- **Appium:** Apesar do WebdriverIO já incluir o Appium Service, instalá-lo de forma global ajudará quando for utilizar o Inspector (`npm install appium -g`).
- **Inspector:** Para que seja possível a captura dos elementos em [github.com/appium/appium-inspector](https://github.com/appium/appium-inspector).
- **Android Studio:** Emulador em [developer.android.com](https://developer.android.com/studio).
- **Configuração das variáveis de ambiente para JDK e Android:**
    - JDK
    - Android Studio

## Por que usar WebdriverIO com Appium é mais simples?

- **Sintaxe Simples:** O WebdriverIO fornece uma API simplificada para interagir com elementos da interface do usuário (UI) em aplicativos móveis, tornando o processo de escrita de scripts de automação mais intuitivo.

- **Preparação do ambiente:** Após a instalação, o WebdriverIO simplifica a preparação do ambiente de desenvolvimento, oferecendo ferramentas e estruturas que facilitam o início do desenvolvimento de testes de automação. Isso permite que os usuários comecem a escrever testes rapidamente, sem a necessidade de configurações complexas ou demoradas.

- **Compatibilidade:** O WebdriverIO é compatível com uma ampla gama de frameworks de teste, tornando-o flexível para integrar-se aos fluxos de trabalho existentes e adaptar-se às necessidades específicas do projeto.

- **Grande Comunidade:** Como uma ferramenta popular, o WebdriverIO possui uma comunidade ativa e recursos de suporte robustos, incluindo documentação detalhada, fóruns e exemplos de código, facilitando o aprendizado e a resolução de problemas.

## Uso do Mocha nos testes

O Mocha é um framework de teste JavaScript amplamente utilizado que fornece uma estrutura simples e flexível para escrever testes. Sua integração com o WebdriverIO permite uma abordagem concisa e legível para o desenvolvimento de testes automatizados.

**Semelhanças com Testes no Cypress:**
- **Describe e It Blocks:** Assim como no Cypress, os testes são organizados em blocos de describe e it, proporcionando uma estrutura clara e hierárquica para os casos de teste.
- **Hooks:** O Mocha suporta hooks como beforeEach e afterEach, permitindo a execução de código de inicialização e limpeza antes e depois de cada teste, semelhante ao comportamento no Cypress.
- **Assertions:** O Mocha permite o uso de qualquer biblioteca de asserção, como Chai ou Assert, para verificar os resultados dos testes, proporcionando flexibilidade na verificação do comportamento esperado.

Combinando o WebdriverIO com Mocha, você pode desenvolver casos de teste móveis de forma eficiente, aproveitando uma sintaxe simplificada e uma estrutura de teste poderosa.

## Javascript

Na escolha desta ferramenta, diversos aspectos foram levados em consideração, sendo um deles a linguagem. Embora outras ferramentas também utilizem o JavaScript, ao considerar a usabilidade geral, o WebdriverIO mostrou-se com uma curva de aprendizado mais suave. Portanto, para evitar adicionar complexidade ao iniciar um projeto com um novo framework e plataforma, optou-se por manter a linguagem que já é familiar aos QA's.

## Allure Report

Da mesma forma que é comum nas automações web, o Allure Report também pode ser utilizado para exibir os resultados dos testes ao trabalhar com o WebDriverIO.

## Sobre custos possíveis

Durante a execução dos testes, foi notada uma lentidão considerável ao iniciar o Android Studio. Para viabilizar a execução dos testes mobile, será necessário considerar o aumento da memória do notebook. No entanto, existem outras opções que devem ser avaliadas, como o uso de plataformas de testes em nuvem ou emulação direta em dispositivos físicos.

Ao ponderar sobre os custos, a compra de memória para o notebook pode ser uma opção mais econômica a curto prazo. Isso se deve ao fato de que o custo de manter uma plataforma de testes em nuvem é significativo, e o investimento em dispositivos físicos implica em despesas consideráveis a longo prazo, uma vez que seria necessário adquirir e manter diversos dispositivos atualizados.

Por outro lado, a utilização de plataformas em nuvem oferece a vantagem de realizar testes em uma ampla variedade de dispositivos móveis iOS e Android, tanto em dispositivos reais quanto em emuladores. Isso proporciona uma cobertura mais abrangente dos testes, garantindo a qualidade e a compatibilidade do aplicativo em diferentes ambientes de uso.

Portanto, é importante realizar uma análise cuidadosa dos custos e benefícios de cada opção antes de tomar uma decisão. Embora a compra de memória para o notebook possa ser uma solução imediata e econômica, é essencial considerar os requisitos de teste, a escala do projeto e os objetivos de qualidade a longo prazo ao escolher a melhor abordagem para a execução dos testes mobile.

## Conclusão

Este repositório fornece uma base sólida para iniciar o desenvolvimento de automação mobile usando WebdriverIO com Appium, aproveitando a simplicidade da sintaxe, a compatibilidade e a robustez do Mocha para escrever testes claros e eficazes.


Por Carina Gouveia ✨
---
date: 2023-05-27
authors:
  - fortunatoguirrugo
categories:
    - GIS Mapping
description: "Breve descrição do conteúdo do post."
---
# COVID-19 Mapping Project

It is with great satisfaction that I share the closure of the COVID-19 map project that I developed!
It was an incredible journey developing since 2021 a tool that visualized the evolution of cases on an interactive map.
``` mermaid
    stateDiagram-v2
        State1: Design PostgreSQL + QuantumGIS
        note right of State1
            Download and organize each Covid 19 data in a excel table.
        end note
        State1 --> Final_Representation
        note left of State1 : Design the representation
```
A database was developed to store this data and then connected to the QuantumGIS environment, it was possible to update the information just by typing the day of publication of the data. After that, it was enough just to update the data and the map is automatically represented using the previously created layout.
    <div class="profile-image-grid">
        <p><img alt="Portrait of Fortunato Guirrugo" class="hero-img" src="images/Profile_Picture.png"></p>
    </div>
<figure markdown="span">
  ![Image title](./blog/images/covid.jpg)
  ![Image title](./docs/blog/images/covid.jpg)
  ![Image title](docs/blog/images/covid.jpg)
  <figcaption>Covid 19 Mapping</figcaption>
</figure>
Thank you to everyone who followed and supported this project!

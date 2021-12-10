import styled from "styled-components";


const Section = styled.div`
  width: 90%;
  margin: 2rem;
  min-width: 35rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 10rem;

`;

const Article = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  box-shadow: 0.8rem 0.8rem 1.4rem var(--bgLight-2), -0.2rem -0.2rem 1.8rem var(--tint);
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem;
`;


const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

const RenderComponent = styled.div`
  margin: 4rem 0;
`;

const Documentation = styled.table``;

const DocumentComponent = ({title, component, propDocs}) => {
  return (
    <Section>
          <Title>{title}</Title>
          <RenderComponent>{component}</RenderComponent>
          <Article>
            <Documentation>
              <tbody>
              <tr key={1}>
                <th>Prop</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default value</th>
              </tr>
              {propDocs.map((doc, index) => {
                return (
                  <tr key={index}>
                    <td>{doc.prop}</td>
                    <td>{doc.description}</td>
                    <td>{doc.type}</td>
                    <td>
                      <code>{doc.defaultValue}</code>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </Documentation>
          </Article>
    </Section>
  );
}

export default DocumentComponent;

export default function ResourceHighlight({ resources }) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources?.map((resource) => (
            <div key={resource.id}>
              <section className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">December 25, 2022</h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="is-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

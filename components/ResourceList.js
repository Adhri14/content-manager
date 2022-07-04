export default function ResourceList({ resources }) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            {resources?.map((item) => (
              <div
                key={item.id}
                className="columns is-multiline is-variable is-8"
              >
                <div className="column is-5 is-offset-1 ">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">
                      December 23, 2021
                    </h2>
                    <h1 className="title has-text-black is-3">{item.title}</h1>
                    <p className="has-text-dark">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

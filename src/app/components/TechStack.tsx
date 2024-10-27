import StackIcon from "tech-stack-icons";

export default function TechStack() {
  return (
    <div className="stack-container">
      <div className="stack-row">
        <div>
          <StackIcon name="js" />
          <div className="stack-name">JavaScript</div>
        </div>
        <div>
          <StackIcon name="typescript" />
          <div className="stack-name">TypeScript</div>
        </div>
        <div>
          <StackIcon name="html5" />
          <div className="stack-name">HTML</div>
        </div>
        <div>
          <StackIcon name="css3" />
          <div className="stack-name">CSS</div>
        </div>
        <div>
          <StackIcon name="reactjs" />
          <div className="stack-name">React</div>
        </div>
        <div>
          <StackIcon name="nextjs2" />
          <div className="stack-name">NextJS</div>
        </div>
      </div>
      <div className="stack-row">
        <div>
          <StackIcon name="python" />
          <div className="stack-name">Python</div>
        </div>
        <div>
          <StackIcon name="csharp" />
          <div className="stack-name">C#</div>
        </div>
        <div>
          <StackIcon name="postgresql" />
          <div className="stack-name">PostgreSQL</div>
        </div>
        <div>
          <StackIcon name="mongodb" />
          <div className="stack-name">MongoDB</div>
        </div>

        <div>
          <StackIcon name="azure" />
          <div className="stack-name">Azure</div>
        </div>
        <div>
          <StackIcon name="aws" />
          <div className="stack-name">AWS</div>
        </div>
      </div>
    </div>
  );
}

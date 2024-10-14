import StackIcon from "tech-stack-icons";

export default function TechStack() {
  return (
    <div className="stack-container">
      <div className="stack-row">
        <div>
          <StackIcon name="js" />
          <div>JavaScript</div>
        </div>
        <div>
          <StackIcon name="typescript" />
          <div>TypeScript</div>
        </div>
        <div>
          <StackIcon name="html5" />
          <div>HTML</div>
        </div>
        <div>
          <StackIcon name="css3" />
          <div>CSS</div>
        </div>
        <div>
          <StackIcon name="reactjs" />
          <div>React</div>
        </div>
        <div>
          <StackIcon name="nextjs2" />
          <div>NextJS</div>
        </div>
      </div>
      <div className="stack-row">
        <div>
          <StackIcon name="python" />
          <div>Python</div>
        </div>
        <div>
          <StackIcon name="csharp" />
          <div>C#</div>
        </div>
        <div>
          <StackIcon name="postgresql" />
          <div>PostgreSQL</div>
        </div>
        <div>
          <StackIcon name="mongodb" />
          <div>MongoDB</div>
        </div>

        <div>
          <StackIcon name="nodejs" />
          <div>NodeJS</div>
        </div>
        <div>
          <StackIcon name="aws" />
          <div>AWS</div>
        </div>
      </div>
    </div>
  );
}

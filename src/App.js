import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CDK deployed app</h1>
        <h2> Stacks created for this app</h2>
        <ul>
          <li>VPC STACK</li>
          <li>ECS CLUSTER STACK</li>
          <li>ECS FARGATE TASK DEFINTION</li>
          <li>ECR REPOSITORY STACK</li>
          <li>ECS SERVICE Stack</li>
          <li> - Application Load Balancer</li>
          <li> - Target Group</li>
          <li>CODEPIPELINE STACK</li>
          <li>CODEBUILD STACK</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

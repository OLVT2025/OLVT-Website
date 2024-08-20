import imageUrls from "@/constants/imageUrls";

const caseStudies = [
  {
    id: 1,
    title: "NSE Fantasy",
    desc: "NSE Fantasy is an educational trading platform designed to empower new traders by offering a risk-free environment where they can learn and practice trading concepts.",
    aboutProductContent: `
      <p>NSE Fantasy is an educational trading platform designed to empower new traders by offering a risk-free environment where they can learn and practice trading concepts. The platform features interactive quizzes, educational content, and a mock trading environment that simulates real-world trading scenarios. The primary goal is to help novice traders build confidence and avoid the financial risks associated with trading in real markets.</p>
    <br/>
    <p>
      Through the platform, users can explore various trading strategies, track their progress, and make informed decisions without the fear of losing real money. The platform's user-friendly interface and engaging content ensure that users have a comprehensive learning experience, which ultimately prepares them for live trading.
    </p>
    `,
    challengesContent: `
      <p>During the development of NSE Fantasy, the primary challenges included.</p>
      <br/>
      <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Real-time Data Integration</strong>
        <p>Acquiring accurate and up-to-date data from multiple financial markets to support mock trading, which required the integration of various APIs for stock prices, indices, and other financial metrics.</p>
      </li>
    <br/>
      <li>
        <strongSimulated Trading Environment</strong>
        <p>Creating a simulated trading experience that mirrored live trading intricacies while handling large volumes of data and managing transaction states, all within a simplified, educational framework.</p>
      </li>
    <br/>
      <li>
        <strong>Balancing Realism and Education</strong>
        <p>Ensuring the platform was realistic enough to teach trading effectively while remaining accessible and easy to use for beginners.</p>
      </li>
    </ul>
    
    `,
    solutionContent: `<p>The development team addressed these challenges by:</p>
    <br/>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Data Integration:</strong>
        <p>Developing algorithms to simulate trades in real-time, allowing users to experience realistic market fluctuations without financial risk.</p>
      </li>
    <br/>
      <li>
        <strong>Custom Trading Algorithms:</strong>
        <p>Developing algorithms to simulate trades in real-time, allowing users to experience realistic market fluctuations without financial risk.</p>
      </li>
    <br/>
      <li>
        <strong>Backend Optimization:</strong>
        <p>Building a robust backend capable of managing high volumes of transactions and providing instant user feedback through optimized data structures and efficient database management.</p>
      </li>
     <br/>
      <li>
        <strong>Continuous Improvement</strong>
        <p>Engaging in regular testing and user feedback to fine-tune the mock trading environment, ensuring it met educational goals while maintaining user engagement.</p>
      </li>
    </ul>
    `,

    projectInfo: [
      { title: "CLIENT", info: "NSE" },
      { title: "LOCATION", info: "Mumbai, India" },
      { title: "INDUSTRY", info: "Financial Education and Trading" },

      {
        title: "TECHNOLOGIES",
        info: ":React Native,Nodejs,Oracle,AWS EC2, AWS RDS , AWS Amplify ,  Nginx",
      },
    ],
    imageUrlList: [`${imageUrls?.nseLearningImg1}`, `${imageUrls?.nseLearningImg2}`],
    // pdfLink:
    //   "https://tts-images-assets.s3.ap-south-1.amazonaws.com/casestudy/Swayer+X+Onelab+Case+Study.pdf",
  },
  {
    id: 2,
    title: "NSE Corpository Dashboard",
    desc: "The NSE Corprository Dashboard developed to make exploring company profiles easy and insightful.",
    aboutProductContent: `
      <p>The NSE Corpository Dashboard developed to make exploring company profiles easy and insightful. It provides users with access to a wide range of information, including company details, directors, financial data, associates, group companies, and more. This case study delves into how we brought this project to life, highlighting the key features and the challenges we faced along the way.</p>
    `,
    challengesContent: `
      <p>The client presented an initial concept with basic wireframes but required expertise to turn this vision into a functional product. The primary challenges were:</p>
      <br/>
      <div style="display: flex;  gap: 20px;">
        <ul style="flex: 1; padding: '0px 10px'; list-style-type: none; padding: 0;">
        <li><strong>Keeping It Simple</strong><br>Despite the complexity of the data, we needed to ensure that the dashboard was user-friendly. Users had to be able to navigate through the information with ease, whether they were looking at annual reports, company ratings, or related parties.</li>
          <br/>
          
          <li><strong>Bringing It All Together</strong><br>We had to pull together a lot of information—company details, director lists, financial data, and more—into one seamless platform.</li>
        
        </ul>

        <ul style="flex: 1; list-style-type: none; padding: 0;">
          <li><strong>Ensuring Timely Updates</strong><br>To keep the data current, we had to set up a process to transfer information from one database to another. This involved running a scheduled cron job daily, which allowed us to automatically update the dashboard with the latest data.</li>
          <br/>
          <li><strong>Accuracy Is Key</strong><br>Implementing features that allow every business offering kids' activities to be easily discoverable by parents.</li>
        </ul>
      </div>
    `,
    solutionContent: `<p>At Orange League, our approach to turning startup ideas into successful products follows a three-step process:</p>
    <br/>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Understanding the Vision</strong>
        <p>We started by working closely with the NSE to understand what they needed. This helped us create a clear plan that would deliver on their vision while meeting the needs of their users.</p>
      </li>
    <br/>
      <li>
        <strong>Building with Users in Mind</strong>
        <p>During the development phase, we focused on creating a dashboard that was not only functional but also easy to use. We applied agile development practices, iterating on the design with feedback from the NSE to ensure we were on the right track.</p>
      </li>
    <br/>
      <li>
        <strong>Launch and Growth Support</strong>
        <p>Conduct thorough testing, help with market launch strategies, and provide ongoing support to ensure growth and scalability.</p>
      </li>
    </ul>
    `,

    projectInfo: [
      { title: "CLIENT", info: "NSE" },
      { title: "LOCATION", info: "Mumbai, India" },
      { title: "INDUSTRY", info: "Capital Market" },

      {
        title: "TECHNOLOGIES",
        info: "ReactJS, NodeJS, ExpressJS, OracleDB, AWS ( EC2, S3, RDS )",
      },
    ],
    imageUrlList: [`${imageUrls?.nseDashboardImg1}`, `${imageUrls?.laptop}`],
    // pdfLink:
    //   "https://tts-images-assets.s3.ap-south-1.amazonaws.com/casestudy/Swayer+X+Onelab+Case+Study.pdf",
  },
  {
    id: 3,
    title: "Bonzer World",
    desc: "Our client, a leading enterprise with stringent security protocols, required a secure on-premise deployment for a sophisticated web application.",
    aboutProductContent: `
      <p>Orange League partnered with Bonzer World to craft a cutting-edge CRM system tailored for travel agents. This CRM system is designed to streamline every aspect of customer management, from handling initial inquiries to create quotations and booking hotels.</p>
    <br/>
      <p>
      The system emphasises user-friendliness and efficiency, offering a comprehensive solution that simplifies travel management tasks. It starts with an intuitive process for managing customer queries and progresses to an easy-to-navigate interface for creating detailed quotations
      </p>
      <br/>
      <p>
      This CRM system not only improves efficiency for travel agents but also enhances the customer experience, making travel planning and management a breeze.
      </p>
    `,
    challengesContent: `
      <p>Turning the client’s vision  with dynamic requirements into a functional product  came with its own set of challenges: 
:</p>
      <br/>
      <div style="display: flex;  gap: 20px;">
        <ul style="flex: 1; padding: '0px 10px'; list-style-type: none; padding: 0;">
          <li><strong>User Accessibility:</strong><br>
          We needed to create a user-friendly system that travel agents of all tech levels could easily navigate. This meant designing a straightforward Admin Dashboard where agents could efficiently track customer queries and generate quotes.</li>
          <br/>
          <li><strong>Time Constraint: </strong><br>With just one month to build a working MVP, we had to work quickly and prioritize effectively. It was a race against the clock to deliver a product that met essential needs without cutting corners.</li>
        </ul>

        <ul style="flex: 1; list-style-type: none; padding: 0;">
          <li><strong>Feature Prioritization:</strong><br/>We faced the challenge of deciding which features were crucial for the MVP. It was important to focus on what really mattered while keeping the platform simple and avoiding unnecessary complexity. 
</li>
          <br/>
          <li><strong>Visibility for All Activity Providers</strong><br>We had to make sure that every business involved—whether it’s hotels or transportation services—could be properly represented and accessed within the system. This meant implementing features that gave all activity providers the visibility they needed.</li>
        </ul>
      </div>
    `,
    solutionContent: `<p>At Orange League, our approach to turning startup ideas into successful products follows a three-step process:</p>
    <br/>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Conceptualization and Planning</strong>
        <p>Work with startups to understand their vision and goals, and create a strategic plan that aligns with the market.</p>
      </li>
    <br/>
      <li>
        <strong>Development and Design</strong>
        <p>Use agile development and user-focused design to build the product, ensuring it matches the startup's vision through a collaborative approach.</p>
      </li>
    <br/>
      <li>
        <strong>Launch and Growth Support</strong>
        <p>Conduct thorough testing, help with market launch strategies, and provide ongoing support to ensure growth and scalability.</p>
      </li>
    </ul>
    `,

    projectInfo: [
      { title: "CLIENT", info: "Bonzer world" },
      { title: "LOCATION", info: "Mumbai , India" },
      { title: "INDUSTRY", info: "Tours & Travels" },

      {
        title: "TECHNOLOGIES",
        info: "Python, Django , ReactJS , PostgreSQL , AWS (S3, EC2, RDS  )  ,  Nginx",
      },
    ],
    imageUrlList: [`${imageUrls?.bonzerImg2}`, `${imageUrls?.bonzerImg1}`],
    // pdfLink:
    //   "https://tts-images-assets.s3.ap-south-1.amazonaws.com/casestudy/Swayer+X+Onelab+Case+Study.pdf",
  },
  {
    id: 4,
    title: "Sky WebHub",
    desc: "This project consisted of creating a web hosting application for deploying code straight from Git repositories, managing custom domains, and achieving scalable, secure hosting.",
    aboutProductContent: `
      <p>This project consisted of creating a web hosting application for deploying code straight from Git repositories, managing custom domains, and achieving scalable, secure hosting. </p>
      <br/>
      <p>
      The scanner uses Docker containers to isolate programs, Redis for logging, and AWS ECS for deployment. The system still has more work in terms of stability and architectural robustness, so at the moment everything may be happening only on EC2 instances.</p>
    `,
    challengesContent: `
      <p>The client offered us a vision of building a vast new web hosting platform. But carrying through that vision to a reliable, user-friendly, and secure application ran into several snags</p>
      <br/>
        <ul>
          <li>
            <strong>Restricted Internet Access:</strong>
            <br/>
            <br/>
            <p>
              Problems in Combining Multiple Git Platforms: Developing on any given Git platform whether it be  GitHub or Git La. The replacement of platforms for communication and deployment automation is quite impossible to prevent. </p>
            <p>
              Access to Repositories and Security Such systems are needed to provide secure access to user repositories while also objecting to security protection as much as possible. The system needed to secure storage and handling of repository user credentials, thus ensuring that only authorized deployments would occur
            </p>
          </li>
          <br/>
          <li>
            <strong>Scalable and Effective CI/CD:</strong>
            <br/>
            <br/>
            <p>
              The deploy pipeline was designed to ensure each project has its own environment to avoid version conflicts and memory leaks. It needed to handle multiple deployments smoothly and efficiently, optimizing server resources and maintaining fast deployment times.
            </p>
          </li>
        <br/>
          <li>
            <strong>Custom Domain Management:</strong>
            <br/>
            <br/>
            <p>
              One of the things that users needed was a simpler way to set up and manage custom domains, which also included adding DNS records or getting an SSL certificate.<br/>
              <p>Challenges :</p>  Automating these processes with support for the integration of bindings to various domain registrars as well as keeping human manual interventions to a minimum
            </p>
          </li>
        <br/>
          <li>
            <strong>Security and Compliance:</strong>
            <br/>
            <br/>
            <p>
              Since the application entirely revolves around user data — repository links, domain, etc., it was of utmost importance to secure sensitive information by enforcing good security practices. One of the unbreakable rules was to follow privacy norms as required by industry practices.
            </p>
          </li>
        </ul>

       
    `,
    solutionContent: `<p>At Orange League, our approach to these challenges was methodical, ensuring that each aspect of the application was robust, scalable, and secure:</p>
    <br/>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Technical Integration and Automation</strong>
        <p> Safe ways to store repository credentials we realized through encrypted storage solutions. API tokens and SSH keys were stored securely and accessed only during deployment, meaning access to repositories was tightly controlled.</p>
      </li>
    <br/>
      <li>
        <strong>A Scalable and Efficient Deployment Pipeline</strong>
        <p>
          We used docker containers for isolating each project environment. So that each deployment could run independently without conflicts, allowing proper resource utilization. So the system can handle a lot of deployments by dynamically spinning up containers.
        </p>
        <p>
          We deployed the containerized applications to AWS ECS to manage and scale them on demand. This let us essentially scale horizontally by adding more containers as we needed to handle the increased load without the need for performance optimizations.
        </p>
      </li>
    
    <br/>
      <li>
        <strong>Security and Compliance</strong>
        <p> We implemented end-to-end encryption for data at rest and in transit, ensuring that all sensitive information was protected. Continuous monitoring and regular updates ensured compliance with security best practices.</p>
      </li>
    </ul>
    `,

    imageUrlList: [`${imageUrls?.skyWebHubImg1}`, `${imageUrls?.skyWebHubImg2}`],
  },
  {
    id: 5,
    title: "On-Premise Deployment",
    desc: "Our client, a leading enterprise with stringent security protocols, required a secure on-premise deployment for a sophisticated web application.",
    aboutProductContent: `
      <p>Our client, a leading enterprise with stringent security protocols, required a secure on-premise deployment for a sophisticated web application. The project involved a React frontend and a Node.js backend connecting to an Oracle database. Given the security measures in place, including restricted internet access on the client’s server, our deployment approach needed to address several unique challenges to ensure a successful launch while adhering to the client’s security requirements.</p>
    `,
    challengesContent: `
      <p>The primary challenges of this deployment were:</p>
      <br/>
      <div style="display: flex;  gap: 20px;">
        <ul style="flex: 1; padding: '0px 10px'; list-style-type: none; padding: 0;">
          <li><strong>Restricted Internet Access</strong><br>The client’s server had no internet access, making it necessary to transfer files manually.</li>
          <br/>
          <li><strong>On-Premise Setup</strong><br>Installing and configuring software directly on the client's servers without the convenience of remote updates or installations.</li>
        </ul>

        <ul style="flex: 1; list-style-type: none; padding: 0;">
          <li><strong>Reverse Proxy Configuration</strong><br/>Setting up Apache as a reverse proxy to ensure that user requests would not directly access the application server.</li>
          <br/>
          <li><strong>SSL Certificate Installation</strong><br>Securing the application with SSL to ensure encrypted communication between users and the web server.</li>
        </ul>
      </div>
    `,
    solutionContent: `
    <div>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong> File Transfer </strong>
        <p>The React and Node.js application files were securely transferred to the client’s Linux server using SCP (Secure Copy Protocol), ensuring accurate file movement without internet access.</p>
      </li>
    <br/>
      <li>
        <strong>Software Installation:</strong>
        <p>Node.js and npm were installed on the client’s server to run the backend application. Oracle dependencies were also installed to ensure smooth integration with the Oracle database.</p>
      </li>
    <br/>
      <li>
        <strong>Application Management</strong>
        <p>
        Process Management - PM2, a popular process manager for Node.js applications, was installed to manage both the React frontend and Node.js backend applications. PM2 ensured that the applications ran efficiently and were automatically restarted in case of failures, providing robust management and monitoring.</p>
      </li>
      <br/>
      <li>
        <strong>Apache Reverse Proxy Configuration</strong>
        <p>
         Apache was set up as a reverse proxy, directing user requests to the web server first before forwarding them to the app server. This setup improved security by blocking direct access to the app server and gave better control over incoming traffic.</p>
      </li>
    </ul>
    <br/>
    <h6><strong>SSL Certificate Configuration</strong></h6>
<p> To secure the application and protect user data, an SSL certificate was configured on the web server. This setup ensured that all communications between the users and the web server were encrypted, enhancing the overall security of the application.</p>
<br/>
<p><strong>Tech Stacks : </strong> Linux Server , React.js , Node.js , Apache , Oracle</p>
</div>
    `,
    imageUrlList: [`${imageUrls?.onPremiseImg1}`, `${imageUrls?.onPremiseImg2}`],
    // pdfLink:
    //   "https://tts-images-assets.s3.ap-south-1.amazonaws.com/casestudy/Swayer+X+Onelab+Case+Study.pdf",
  },
  {
    id: 6,
    title: "Workwizz",
    desc: "Work Wizz is changing the way clients and freelancers work together online. This case study looks at the platform's development, key features, and challenges, showing how our solutions improve efficiency and growth in the freelance market.",
    aboutProductContent: `
      <p>Workwizz is changing the way clients and freelancers work together online. This case study looks at the platform's development, key features, and challenges, showing how our solutions improve efficiency and growth in the freelance market. </p>
    <br/>
    `,
    challengesContent: `
      <p>The development of Workwizz faced several key challenges:</p>
      <br/>
      <div style="display: flex;  gap: 20px;">
        <ul style="flex: 1; padding: '0px 10px'; list-style-type: none; padding: 0;">
          <li><strong>User Accessibility:</strong><br>
          Making a simple sign-up process for both clients and freelancers, with easy management for company details and individual skills.
</li>
          <br/>
          <li><strong>Feature Prioritization</strong><br>Creating an easy-to-use interface for clients to post jobs with details like project scope, time, experience, and budget.</li>
        </ul>

        <ul style="flex: 1; list-style-type: none; padding: 0;">
          <li><strong>Visibility for All Activity Providers</strong><br/>
          
         Setting up a secure payment system to ensure jobs are published only after payment, with options to manage unpaid jobs.
</li>
          <br/>
          <li><strong>Time Constraint</strong><br>
          Building a system for freelancers to create, track, and manage proposals, while letting clients review, hire, or reject proposals and communicate decisions easily.</li>
        </ul>
      </div>
    `,
    solutionContent: `<p>At Orange League, our approach to turning startup ideas into successful products follows a three-step process:</p>
    <br/>
    <ul style="list-style-type: none; padding: 0;">
      <li>
        <strong>Conceptualization and Planning</strong>
        <p>Work with startups to understand their vision and goals, and create a strategic plan that aligns with the market.</p>
      </li>
    <br/>
      <li>
        <strong>Development and Design</strong>
        <p>Use agile development and user-focused design to build the product, ensuring it matches the startup's vision through a collaborative approach.</p>
      </li>
    <br/>
      <li>
        <strong>Launch and Growth Support</strong>
        <p>Conduct thorough testing, help with market launch strategies, and provide ongoing support to ensure growth and scalability.</p>
      </li>
    </ul>
    `,

    projectInfo: [
      { title: "CLIENT", info: " Orange League" },
      { title: "LOCATION", info: "Pune" },
      {
        title: "TECHNOLOGIES",
        info: "ReactJS , ExpressJS , NodeJs, PostgreSQL , AWS EC2,  S3, RDS ",
      },
    ],
    imageUrlList: [`${imageUrls?.workwizImg1}`, `${imageUrls?.workwizImg2}`],
    // pdfLink:
    //   "https://tts-images-assets.s3.ap-south-1.amazonaws.com/casestudy/Swayer+X+Onelab+Case+Study.pdf",
  },
];

export default caseStudies;

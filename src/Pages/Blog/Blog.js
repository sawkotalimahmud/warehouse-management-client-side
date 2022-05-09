import React from "react";
import { Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="w-75 mx-auto">
      <div className="mt-5">
        <div className="text-center mb-3">
          <h2>1. Question: Difference between javascript and nodejs</h2>
          <h4>
            Answer: Difference between javascript and nodejs are on the table
          </h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Javascript</th>
              <th>NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>It is basically used on the client-side.</td>
              <td>It is mostly used on the server-side.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Javascript can run in any browser engine as like JS core in
                safari and Spider monkey in Firefox.{" "}
              </td>
              <td>
                V8 is the Javascript engine inside of node.js that parses and
                runs Javascript.{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <div className="text-center mb-3">
          <h2>
            2. Question: When should you use nodejs and when should you use
            mongodb
          </h2>
          <h4>
            Answer: When should we use Nodejs? and When should we use MongoDB?
            are on the table
          </h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>When should we use Nodejs?</th>
              <th>When should we use MongoDB?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Any project needs a programming environment and a runtime
                library that offers you basic programming tools/support and can
                compile and/or interpret your code. Nodejs is such as tool for
                the Javascript programming language
              </td>
              <td>
                If your application needs the ability to persistently store data
                in a way that you can efficiently query or update it later, then
                you would typically use some form of database. There are dozens
                of popular databases. MongoDB is one such database. MariaDB,
                MySql, CouchDB, DynamoDB.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div>
        <div className="text-center mb-3">
          <h2>3.Differences between sql and nosql databases.</h2>
          <h4>
            Answer: Differences between sql and nosql databases are on the table
          </h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                These databases have fixed or static or predefined schema{" "}
              </td>
              <td>They have dynamic schema</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                These databases are not suited for hierarchical data storage.{" "}
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vertically Scalable </td>
              <td>Horizontally scalable</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <div className="text-center mb-3">
          <h2>4. Question: What is the purpose of jwt and how does it work</h2>
          <h4>
            Answer: What is the purpose of jwt and how does it work are on the
            table
          </h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>What Is JWT?</th>
              <th>How JWT Works</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </td>
              <td>
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Blog;

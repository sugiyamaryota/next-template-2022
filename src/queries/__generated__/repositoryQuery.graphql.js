/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type repositoryQueryVariables = {||};
export type repositoryQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type repositoryQuery = {|
  variables: repositoryQueryVariables,
  response: repositoryQueryResponse,
|};
*/


/*
query repositoryQuery {
  repository(owner: "sugiyamaryota", name: "next-template-2022") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "next-template-2022"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "sugiyamaryota"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"next-template-2022\",owner:\"sugiyamaryota\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"next-template-2022\",owner:\"sugiyamaryota\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery {\n  repository(owner: \"sugiyamaryota\", name: \"next-template-2022\") {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '687d6de4ee1149771de4e1810963f9db';

module.exports = node;

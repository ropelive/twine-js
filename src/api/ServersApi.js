/**
 * Twine
 * Twine server REST Api definition
 *
 * OpenAPI spec version: 1.0.0
 * Contact: gokmen@goksel.me
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/OK', 'model/Registered', 'model/Server'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/OK'), require('../model/Registered'), require('../model/Server'));
  } else {
    // Browser globals (root is window)
    if (!root.Twine) {
      root.Twine = {};
    }
    root.Twine.ServersApi = factory(root.Twine.ApiClient, root.Twine.Error, root.Twine.OK, root.Twine.Registered, root.Twine.Server);
  }
}(this, function(ApiClient, Error, OK, Registered, Server) {
  'use strict';

  /**
   * Servers service.
   * @module api/ServersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ServersApi. 
   * @alias module:api/ServersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteServer operation.
     * @callback module:api/ServersApi~deleteServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OK} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete server by ID
     * Deletes a server with given ID
     * @param {String} serverId ID of server to delete
     * @param {module:api/ServersApi~deleteServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OK}
     */
    this.deleteServer = function(serverId, callback) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling deleteServer");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OK;

      return this.apiClient.callApi(
        '/servers/{serverId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServer operation.
     * @callback module:api/ServersApi~getServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Server} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find server by ID
     * Returns a single server with details
     * @param {String} serverId ID of server to return
     * @param {module:api/ServersApi~getServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Server}
     */
    this.getServer = function(serverId, callback) {
      var postBody = null;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling getServer");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Server;

      return this.apiClient.callApi(
        '/servers/{serverId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServers operation.
     * @callback module:api/ServersApi~getServersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of available servers
     * Returns list of registered servers by their IDs
     * @param {module:api/ServersApi~getServersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getServers = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/servers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerServer operation.
     * @callback module:api/ServersApi~registerServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Registered} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new server
     * 
     * @param {module:model/Server} body Server object to register Twine
     * @param {module:api/ServersApi~registerServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Registered}
     */
    this.registerServer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling registerServer");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Registered;

      return this.apiClient.callApi(
        '/servers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServer operation.
     * @callback module:api/ServersApi~updateServerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OK} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch server by ID
     * Updates a server with given ID and data
     * @param {String} serverId ID of server to update
     * @param {module:model/Server} body Server details to update
     * @param {module:api/ServersApi~updateServerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OK}
     */
    this.updateServer = function(serverId, body, callback) {
      var postBody = body;

      // verify the required parameter 'serverId' is set
      if (serverId === undefined || serverId === null) {
        throw new Error("Missing the required parameter 'serverId' when calling updateServer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServer");
      }


      var pathParams = {
        'serverId': serverId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OK;

      return this.apiClient.callApi(
        '/servers/{serverId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

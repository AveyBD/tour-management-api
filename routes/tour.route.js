const express = require("express");
const {
  getTours,
  postTours,
  trendingTours,
  cheapestTours,
  updateTours,
  detailsTours,
} = require("../controllers/tour.controller");
const tourRouter = express.Router();

tourRouter.route("/").get(getTours).post(postTours);
tourRouter.route("/trending").get(trendingTours);
tourRouter.route("/cheapest").get(cheapestTours);
tourRouter.route("/:id").get(detailsTours).patch(updateTours);

module.exports = tourRouter;

// documentation for swagger

/**
 * @swagger
 * /api/v1/tours:
 *   get:
 *     summary: Retrieves all the tours data
 *     description: This api will call all the tours data from the database. You can use limit and pagination.
 * responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       success:
 *                         type: boolean
 *                         description: If response is success of failed.
 *                         example: true
 *                       data:
 *                         type: object
 *                         description: The response Data
 *                         properties:
 *                            totalTour:
 *                                type: integer
 *                                example: 10
 *                            totalPage:
 *                                description: return a number if you request page and limit
 *                                example: 3
 *                            tours:
 *                               type: array
 *                               items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                        type: string
 *                                      name:
 *                                        type: string
 *                                      description:
 *                                        type: string
 *                                      cost:
 *                                        type: integer
 *                                      createdAt:
 *                                         type: string
 *                                         format: date-time
 *
 *                                      updatedAt:
 *                                         type: string
 *                                      __v:
 *                                         type: integer
 *                                      count:
 *                                         type: integer
 *
 */

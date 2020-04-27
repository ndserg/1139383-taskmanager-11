import BoardComponent from "./components/board.js";
import BoardController from "./controllers/board.js";
import FilterComponent from "./components/filter.js";
import SiteMenuComponent from "./components/site-menu.js";
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";
import {render, RenderPosition} from "./utils/render.js";

const TASK_COUNT = 20;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const today = new Date().toLocaleDateString();

const filterCounter = [
  tasks.length,
  tasks.filter((task) => task.dueDate instanceof Date && task.dueDate < Date.now()).length,
  tasks.filter((task) => task.dueDate !== null && task.dueDate.toLocaleDateString() === today).length,
  tasks.filter((task) => task.isFavorite === true).length,
  tasks.filter((task) => Object.values(task.repeatingDays).includes(true)).length,
  tasks.filter((task) => task.isArchive === true).length,
];

const filters = generateFilters(filterCounter);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);

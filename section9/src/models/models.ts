import u from "@shared/utils";
import _ from "lodash";

export class Project {

  public id: string;

  public constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public tasks: Task[] = []
  ) {
    this.id = u.randomUuid();
    if(_.isNil(tasks)) {
      this.tasks = [];
    }
  }

  public addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }

  public removeTask(task: Task) {
    this.tasks = _.reject(this.tasks, { id: task.id });
  }
}

export namespace Project {
  export function Of(title: string, description: string, dueDate: Date, tasks?: Task[]): Project {
    return new Project(title, description, dueDate, tasks);
  }
}

export interface Task {
  id: string;
  title: string;
}

export namespace Task {
  export function Of(title: string) {
    return {
      id: u.randomUuid(),
      title
    };
  }
}

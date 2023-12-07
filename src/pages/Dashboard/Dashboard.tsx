import Card from "../../components/Card";

const Dashboard = () => {
  const listTasks = [
    {
      user: "Rodrigo",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Em andamento",
    },
    {
      user: "Jessé",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Entregue",
    },
    {
      user: "Rodrigo",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Atrasada",
    },

    {
      user: "Rodrigo",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Entregue",
    },
    {
      user: "Rodrigo",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Atrasada",
    },

    {
      user: "Rodrigo",
      task: "Nome da tarefa",
      expireDate: "01/01/2000",
      deliveredDate: "01/02/2000",
      status: "Entregue",
    },
  ];

  return (
    <div className="flex flex-1 flex-col p-10">
      <div className="flex w-full gap-6">
        <Card
          label={"109 active users"}
          icon={"users"}
          color={"white"}
          background={"black"}
        />
        <Card
          label={"20 inative users"}
          icon={"users"}
          color={"white"}
          background={"red"}
        />
        <Card
          label={"30 tasks"}
          icon={"task"}
          color={"white"}
          background={"pink"}
        />
      </div>

      <div className=" flex flex-col rounded-md overflow-hidden mt-10">
        <div
          className="text-white px-4 py-3 bg-gray-400"
        >
          <span className="">Relatório de tarefas</span>
        </div>

        {listTasks.map((item, index) => {
          let background =
            item.status == "Entregue"
              ? "bg-green-600	"
              : item.status == "Em andamento"
              ? "bg-orange-500"
              : "bg-red-600";

          return (
            <div
              key={index}
              className={`flex px-4 py-3 text-white ${background}`}
            >
              <div className="w-2/12 text-sm">
                <h3 className="font-bold">Colaborador</h3>{" "}
                <span>{item.user} </span>
              </div>
              <div className="w-3/12 text-sm">
                <h3 className="font-bold">Tarefa</h3> <span>{item.task}</span>{" "}
              </div>
              <div className="w-2/12 text-sm">
                <h3 className="font-bold">Vencimento</h3>{" "}
                <span>{item.expireDate}</span>{" "}
              </div>
              <div className="w-2/12 text-sm">
                <h3 className="font-bold">Entrega</h3>{" "}
                <span>{item.deliveredDate}</span>{" "}
              </div>
              <div className="w-2/12 text-sm">
                <h3 className="font-bold">Status</h3> <span>{item.status}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

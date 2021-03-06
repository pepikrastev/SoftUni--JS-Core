class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = []; 
        this.totalRamUsage = 0;
        this.totalCpuUsage = 0;
    }

    installAProgram(name, requiredSpace){

        if (this.hddMemory < requiredSpace) {
            throw new Error("There is not enough space on the hard drive");
        }

        let currProgram = {
            name,
            requiredSpace
        };

        this.installedPrograms.push(currProgram);
        this.hddMemory -= requiredSpace;

        return currProgram;
    }

    uninstallAProgram(name){
        let program = this.installedPrograms.filter(p => p.name === name)[0];        

        if (!program) {
            throw new Error("Control panel is not responding");
        }

        let index = this.installedPrograms.indexOf(program);
        this.installedPrograms.splice(index, 1);
        this.hddMemory += program.requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name) {
        const programIndexInInstalledPrograms = this.installedPrograms
            .findIndex(p => p.name === name);

        if (programIndexInInstalledPrograms === -1) {
            throw new Error(`The ${name} is not recognized`);
        }

        const programIndexInTaskManager = this.taskManager
            .findIndex(p => p.name === name);

        if (programIndexInTaskManager > -1) {
            throw new Error(`The ${name} is already open`);
        }

        const program = this.installedPrograms[programIndexInInstalledPrograms];

        const ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        if (this.totalRamUsage + ramUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (this.totalCpuUsage + cpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        const openedProgram = {
            name,
            ramUsage,
            cpuUsage
        };

        this.totalRamUsage += openedProgram.ramUsage;
        this.totalCpuUsage += openedProgram.cpuUsage;

        this.taskManager.push(openedProgram);
        return openedProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let info = [];

        for (const program of this.taskManager) {
            info.push(`Name - ${program.name} | Usage - CPU: ` +
                `${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`)
        }

        return info.join('\n');
    }
}


let computer = new Computer(4096, 7.5, 250000);
// act
computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');



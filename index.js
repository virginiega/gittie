class Gittie {
    constructor(name) {
      this.name = name || 'GitCat';
      this.commits = 0;
    }
  
    commit() {
      this.commits++;
      console.log(`${this.name} made a new commit! Total commits: ${this.commits}`);
    }
  
    push() {
      console.log(`${this.name} pushed the changes to the repository.`);
    }
  
    pull() {
      console.log(`${this.name} pulled the latest changes from the repository.`);
    }
  }
  
  // Example usage
  const myGittie = new Gittie('GitCat');
  
  myGittie.commit();
  myGittie.commit();
  myGittie.push();
  myGittie.pull();
  
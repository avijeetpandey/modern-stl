/**
 * @author {Avijeet Pandey}
 */
interface G<T> {
}
export default class Graph<T> implements G<T> {
    constructor();
    /**
     * Member Functions
     * BFS , DFS , ShortestPath , Bipartite check , radius , diameter , hasLoop , isNullGraph , print , toJson , toList , add
     */
    add(u: T, v: T): void;
    dfs(node: T): void;
    bfs(node: T): void;
    shortestPath(src: T, dest: T): void;
    isBipartite(): void;
    radius(): void;
    diameter(): void;
    hasLoop(): void;
    isNullGraph(): void;
    print(): void;
    toJson(): void;
    toList(): void;
}
export {};
//# sourceMappingURL=Graph.d.ts.map
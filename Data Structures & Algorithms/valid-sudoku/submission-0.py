class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        counter = set()
        # row check
        for i in range(0, 9):
            for j in range(0, 9):
                if board[i][j] == ".":
                    continue
                if board[i][j] in counter:
                    return False
                counter.add(board[i][j])
            counter.clear()

        # col check
        for j in range(0, 9):
            for i in range(0, 9):
                if board[i][j] == ".":
                    continue
                if board[i][j] in counter:
                    return False
                counter.add(board[i][j])
            counter.clear()
        
        # box check
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                for a in range(i, i + 3):
                    for b in range(j, j + 3):
                        if board[a][b] == ".":
                            continue
                        if board[a][b] in counter:
                            return False
                        counter.add(board[a][b])
                
                counter.clear()
        
        return True

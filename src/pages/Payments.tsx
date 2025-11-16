import { useState } from "react";
import { Wallet, ArrowDownToLine, ArrowUpFromLine, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

const Payments = () => {
  const [balance] = useState(1250.75);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const transactions = [
    { id: 1, type: "deposit", amount: 500, date: "2024-01-15", status: "completed" },
    { id: 2, type: "payment", amount: -245.50, date: "2024-01-14", status: "completed", description: "Flight JFK-LAX" },
    { id: 3, type: "deposit", amount: 1000, date: "2024-01-10", status: "completed" },
    { id: 4, type: "payment", amount: -180.25, date: "2024-01-08", status: "completed", description: "Flight LAX-ORD" },
    { id: 5, type: "withdraw", amount: -300, date: "2024-01-05", status: "pending" },
  ];

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    toast.success(`Deposit of ${depositAmount} USDC initiated`);
    setDepositAmount("");
    setDepositOpen(false);
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (parseFloat(withdrawAmount) > balance) {
      toast.error("Insufficient balance");
      return;
    }
    toast.success(`Withdrawal of ${withdrawAmount} USDC initiated`);
    setWithdrawAmount("");
    setWithdrawOpen(false);
  };

  return (
    <div className="flex h-screen bg-background bg-hero-gradient">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Payments</h1>
                <p className="text-muted-foreground">Manage your USDC balance and transactions</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-full md:col-span-2 lg:col-span-3">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-2xl font-bold">Total Balance</CardTitle>
                      <CardDescription>Available USDC in your wallet</CardDescription>
                    </div>
                    <Wallet className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground">{balance.toFixed(2)}</span>
                      <span className="text-2xl text-muted-foreground">USDC</span>
                    </div>
                    <div className="flex gap-3">
                      <Dialog open={depositOpen} onOpenChange={setDepositOpen}>
                        <DialogTrigger asChild>
                          <Button className="flex-1 gap-2">
                            <ArrowDownToLine className="h-4 w-4" />
                            Deposit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Deposit USDC</DialogTitle>
                            <DialogDescription>
                              Add funds to your SkyBook wallet
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="deposit-amount">Amount (USDC)</Label>
                              <Input
                                id="deposit-amount"
                                type="number"
                                placeholder="0.00"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                                step="0.01"
                                min="0"
                              />
                            </div>
                            <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                              Deposits typically arrive within 5-10 minutes
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setDepositOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleDeposit}>Confirm Deposit</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 gap-2">
                            <ArrowUpFromLine className="h-4 w-4" />
                            Withdraw
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Withdraw USDC</DialogTitle>
                            <DialogDescription>
                              Transfer funds from your SkyBook wallet
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="withdraw-amount">Amount (USDC)</Label>
                              <Input
                                id="withdraw-amount"
                                type="number"
                                placeholder="0.00"
                                value={withdrawAmount}
                                onChange={(e) => setWithdrawAmount(e.target.value)}
                                step="0.01"
                                min="0"
                                max={balance}
                              />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Available balance:</span>
                              <span className="font-medium text-foreground">{balance.toFixed(2)} USDC</span>
                            </div>
                            <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                              Withdrawals may take 1-3 business days to process
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setWithdrawOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleWithdraw}>Confirm Withdrawal</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Your recent USDC transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-full p-2 ${
                              transaction.type === "deposit"
                                ? "bg-green-500/10 text-green-500"
                                : transaction.type === "withdraw"
                                ? "bg-orange-500/10 text-orange-500"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {transaction.type === "deposit" ? (
                              <ArrowDownToLine className="h-5 w-5" />
                            ) : transaction.type === "withdraw" ? (
                              <ArrowUpFromLine className="h-5 w-5" />
                            ) : (
                              <DollarSign className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium capitalize text-foreground">
                              {transaction.type}
                              {transaction.description && ` - ${transaction.description}`}
                            </p>
                            <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p
                            className={`text-lg font-semibold ${
                              transaction.amount > 0 ? "text-green-500" : "text-foreground"
                            }`}
                          >
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount.toFixed(2)} USDC
                          </p>
                          {transaction.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-orange-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payments;
